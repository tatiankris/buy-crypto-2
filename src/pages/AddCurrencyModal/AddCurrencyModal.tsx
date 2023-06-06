import React, { useEffect, useMemo, useState } from 'react';
import style from './AddCurrencyModal.module.scss';
import CLoseButton from '../../shared/CloseButton/CLoseButton';
import { useParams } from 'react-router-dom';
import { useGetCurrency } from '../../processes/query/useGetCurrency';
import { addInPortfolio } from '../../processes/updatePortfolio';
import { useGetCurrenciesByIds } from '../../processes/query/useGetCurrenciesByIds';

type PropsType = {
  handleClose: () => void;
};

function AddCurrencyModal({ handleClose, ...props }: PropsType) {
  const { currencyId } = useParams();

  const { data } = useGetCurrency(currencyId ? currencyId : null);
  const currency = useMemo(() => data?.data.data, [data?.data.data]);

  const [cryptoValue, setCryptoValue] = useState<number>(0);
  const [usdValue, setUsdValue] = useState<number>(0);

  const { refetch } = useGetCurrenciesByIds();

  if (!currency) {
    return <div>Not found</div>;
  }

  const changeCryptoValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCryptoValue(+e.currentTarget.value);
    setUsdValue(+e.currentTarget.value * +currency.priceUsd);
  };
  const changeUsdValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdValue(+e.currentTarget.value);
    setCryptoValue(+e.currentTarget.value / +currency.priceUsd);
  };
  const addCurrencyHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPortfolioData = addInPortfolio(currency.id, cryptoValue);
    localStorage.setItem('usersCurrencies', JSON.stringify(newPortfolioData));

    refetch();

    handleClose();
  };

  return (
    <div onClick={handleClose} className={style.modal}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.paper}
      >
        <CLoseButton handleClose={handleClose} />
        <div className={style.paperName}>{`add ${currency.name}`}</div>
        <form onSubmit={addCurrencyHandler}>
          <label>{currency.name}</label>
          <input
            type={'number'}
            step={0.000001}
            value={cryptoValue}
            onChange={changeCryptoValueHandler}
          />
          <label>USD {currency.priceUsd.slice(0, 9)}$</label>
          <input
            type={'number'}
            step={0.000001}
            value={usdValue}
            onChange={changeUsdValueHandler}
          />
          <button className={style.submit} type={'submit'}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCurrencyModal;
