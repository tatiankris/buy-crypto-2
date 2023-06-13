import style from './CurrenciesTable.module.scss';
import React from 'react';
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import { ResponseAssetsType } from '../../api/api';

type PropsType = {
  userCurrencies?: Array<{ id: string; value: number }>;
  type: 'portfolio' | 'main';
  page: number;
  currencies: ResponseAssetsType | null;
};

function CurrenciesTable({ type, page, currencies, userCurrencies, ...props }: PropsType) {
  return (
    <div className={style.table__wrapper}>
      <table
        className={type === 'portfolio' ? `${style.portfolioTable} ${style.table}` : style.table}
      >
        <thead className={style.thead}>
          <tr>
            <th>Name</th>
            {type === 'portfolio' && <th className={style.usersCountTH}>Count</th>}
            <th>Price</th>
            {type === 'main' && <th>24h %</th>}
            {type === 'main' && <th>Market Cap</th>}
            {type === 'main' && <th>Circulating Supply</th>}
            {type === 'main' && <th>VWAP 24h</th>}
            {type === 'main' && <th>buy</th>}
            {type === 'portfolio' && <th>Delete</th>}
          </tr>
        </thead>
        {currencies && (
          <tbody className={style.tbody}>
            {currencies &&
              currencies.map((c) => (
                <CurrencyRow userCurrencies={userCurrencies} type={type} key={c.id} currency={c} />
              ))}
          </tbody>
        )}
        {!currencies && (
          <tbody className={style.tbody__loading}>
            {[...Array(6)].map((item, index) => (
              <CurrencyRow key={index} type={type} currency={'loading'} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default CurrenciesTable;
