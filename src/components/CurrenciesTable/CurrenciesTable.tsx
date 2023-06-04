import style from './CurrenciesTable.module.scss';
import React from 'react';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import { ResponseAssetsType } from '../../processes/api';

type PropsType = {
  userCurrencies?: Array<{ id: string; value: number }>;
  type: 'portfolio' | 'main';
  page: number;
  currencies: ResponseAssetsType | null;
};

function CurrenciesTable({ type, page, currencies, userCurrencies, ...props }: PropsType) {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>name</th>
          {type === 'portfolio' && <th>coins</th>}
          <th>usd</th>
          {type === 'main' && <th>24h change</th>}
          {type === 'main' && <th>buy</th>}
          {type === 'portfolio' && <th>delete</th>}
        </tr>
      </thead>
      {currencies && (
        <tbody className={style.tbody}>
          {currencies &&
            currencies.map((c) => (
              <CurrencyCard userCurrencies={userCurrencies} type={type} key={c.id} currency={c} />
            ))}
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
