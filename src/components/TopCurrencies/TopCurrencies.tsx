import React, { useMemo } from 'react';
import style from './TopCurrencies.module.scss';
import { useGetAllCurrencies } from '../../processes/query/useGetAllCurrencies';

function TopCurrencies() {
  const { data } = useGetAllCurrencies(0);
  const currencies = useMemo(() => data?.data, [data?.data]);
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
