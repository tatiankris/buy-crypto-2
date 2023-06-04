import React, { useEffect, useState } from 'react';
import style from './AddCurrencyModal.module.scss';
import CLoseButton from '../../shared/CloseButton/CLoseButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { coinsAPI } from '../../processes/api';

type PropsType = {
  handleClose: () => void;
};

function AddCurrencyModal({ handleClose, ...props }: PropsType) {
  // useEffect(() => {
  //   localStorage.removeItem('currenciesIds');
  // }, []);
  const { currencyId } = useParams();

  const { data } = useQuery(['currency', currencyId], async () => {
    return await coinsAPI.getAssetsItem(currencyId ? currencyId : '');
  });
  const currency = data?.data.data;
  const [cryptoValue, setCryptoValue] = useState<number>(0);
  const [usdValue, setUsdValue] = useState<number>(0);

  console.log('currency', currency);

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
    const localStorageData = localStorage.getItem('currenciesIds');
    const oldStorageData = localStorageData ? JSON.parse(localStorageData) : null;
    const oldCurrencyData =
      oldStorageData &&
      oldStorageData.find((c: { id: string; value: number }) => c.id === currency.id);
    const getNewStorageData = () => {
      if (oldStorageData) {
        return oldCurrencyData
          ? oldStorageData.map((c: { id: string; value: number }) =>
              c.id === oldCurrencyData.id ? { ...c, value: c.value + cryptoValue } : c
            )
          : [...oldStorageData, { id: currency.id, value: cryptoValue }];
      } else {
        return [{ id: currency.id, value: cryptoValue }];
      }
    };
    localStorage.setItem('currenciesIds', JSON.stringify(getNewStorageData()));
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
