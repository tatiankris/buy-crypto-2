import React from 'react';
import { ResponseItemType } from '../../api/api';
import style from './CurrencyInfoBlock.module.scss';
import { refactorNum } from '../../processes/abbrNum';
type PropsType = {
  currency: ResponseItemType;
};
function CurrencyInfoBlock({ currency }: PropsType) {
  const c = {} as ResponseItemType;
  if (currency) {
    let prop: keyof ResponseItemType;
    for (prop in currency) {
      c[prop] = refactorNum(+currency[prop], 3);
    }
  }

  return (
    <div className={style.currencyInfoBlock}>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Max Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{c.priceUsd}</td>
            <td>{`${c.changePercent24Hr}%`}</td>
            <td>{`$${c.marketCapUsd}`}</td>
            <td>{`${c.maxSupply} ${currency.symbol}`}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Supply</th>
            <th>24h USD</th>
            <th>24h VWAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currency.symbol}</td>
            <td>{`${c.supply} ${currency.symbol}`}</td>
            <td>{`$${c.volumeUsd24Hr}`}</td>
            <td>{`$${c.vwap24Hr}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyInfoBlock;
