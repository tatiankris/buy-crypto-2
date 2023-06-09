import React, { useEffect, useState } from 'react';
import style from './AddCurrencyModal.module.scss';
import CLoseButton from '../../shared/CloseButton/CLoseButton';
import { useParams } from 'react-router-dom';
import { useProfileStore } from '../../store/portfolio-store';
import { useCurrencyStore } from '../../store/currency-store';

type PropsType = {
  handleClose: () => void;
};

function AddCurrencyModal({ handleClose, ...props }: PropsType) {
  const { currencyId } = useParams();
  const addCurrency = useProfileStore((state) => state.addCurrency);
  const currency = useCurrencyStore((state) => state.currentCurrency);
  const setCurrentCurrency = useCurrencyStore((state) => state.setCurrentCurrency);

  useEffect(() => {
    currencyId && setCurrentCurrency(currencyId);
  }, []);
  const [cryptoValue, setCryptoValue] = useState<number>(0);
  const [usdValue, setUsdValue] = useState<number>(0);

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
    addCurrency(currency.id, cryptoValue);
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
