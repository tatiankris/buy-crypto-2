import style from './CurrenciesTable.module.scss';
import React from 'react';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import { useQuery } from 'react-query';
import { coinsAPI } from '../../processes/api';

type PropsType = {
  type: 'portfolio' | 'main';
  page: number;
};

function CurrenciesTable({ type, page, ...props }: PropsType) {
  const { data } = useQuery(['currencies', page], async () => {
    return await coinsAPI.getAssets(page);
  });
  const currencies = data && data.data;

  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>name</th>
          {type === 'main' && <th>24h change</th>}
          <th>usd</th>
          {type === 'main' && <th>buy</th>}
          {type === 'portfolio' && <th>delete</th>}
        </tr>
      </thead>
      {currencies && (
        <tbody className={style.tbody}>
          {currencies &&
            currencies.map((c) => <CurrencyCard type={type} key={c.id} currency={c} />)}
        </tbody>
      )}
      {!currencies && (
        <tbody className={style.tbody__loading}>
          <div className={style.tbody__loading__text}>Loading...</div>
        </tbody>
      )}
    </table>
  );
}

export default CurrenciesTable;
