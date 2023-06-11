import React, { useEffect, useState } from 'react';
import style from './AddCurrencyModal.module.scss';
import { useParams } from 'react-router-dom';
import { useProfileStore } from '../../../store/portfolio-store';
import { useCurrencyStore } from '../../../store/currency-store';
import ModalContainer from '../../../shared/ModalContainer/ModalContainer';

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
  const [cryptoValue, setCryptoValue] = useState<number | string>('');
  const [usdValue, setUsdValue] = useState<number | string>('');

  if (!currency) {
    return <div>Not found</div>;
  }

  const changeCryptoValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setCryptoValue(value);
    !!value ? setUsdValue(+value * +currency.priceUsd) : setUsdValue(value);
  };
  const changeUsdValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUsdValue(value);
    !!value ? setCryptoValue(+value / +currency.priceUsd) : setCryptoValue(value);
  };
  const addCurrencyHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    +cryptoValue > 0 && addCurrency(currency.id, +cryptoValue);
    handleClose();
  };

  return (
    <ModalContainer handleClose={handleClose} nameText={`Add ${currency.name}`}>
      <form onSubmit={addCurrencyHandler}>
        <label>{currency.name}</label>
        <input
          placeholder={'Amount of currency'}
          type="number"
          step={0.000001}
          value={cryptoValue}
          onChange={changeCryptoValueHandler}
        />
        <label>USD {currency.priceUsd.slice(0, 9)}$</label>
        <input
          placeholder={'Dollar value'}
          type={'number'}
          step={0.000001}
          value={usdValue}
          onChange={changeUsdValueHandler}
        />
        <button disabled={cryptoValue <= 0} className={style.submit} type={'submit'}>
          ADD
        </button>
      </form>
    </ModalContainer>
  );
}

export default AddCurrencyModal;
