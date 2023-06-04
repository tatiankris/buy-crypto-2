import React from 'react';
import style from './TopCurrencies.module.scss';
import { useQuery } from 'react-query';
import { coinsAPI } from '../../processes/api';

function TopCurrencies() {
  const { data } = useQuery(
    'currencies',
    async () => {
      return await coinsAPI.getAssets(0, 6);
    },
    { refetchOnWindowFocus: false }
  );
  const currencies = data && data.data;
  if (!currencies) {
    return <div>Loading</div>;
  }
  return (
    <div className={style.topCrypto}>
      <div className={`${style.topCrypto__Item} ${style.topCrypto__Item1}`}>
        <span>{currencies[0].name}</span> <b>{currencies[0].priceUsd.slice(0, 7)}</b>
      </div>
      <div className={`${style.topCrypto__Item} ${style.topCrypto__Item2}`}>
        <span>{currencies[1].name}</span> <b>{currencies[1].priceUsd.slice(0, 7)}</b>
      </div>
      <div className={`${style.topCrypto__Item} ${style.topCrypto__Item3}`}>
        <span>{currencies[2].name}</span> <b>{currencies[2].priceUsd.slice(0, 7)}</b>
      </div>
    </div>
  );
}

export default TopCurrencies;
