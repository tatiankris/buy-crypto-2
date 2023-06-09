import React, { useEffect } from 'react';
import { ResponseItemType } from '../../api/api';
import style from './CurrencyInfoBlock.module.scss';
type PropsType = {
  currency: ResponseItemType;
};
function CurrencyInfoBlock({ currency }: PropsType) {
  return (
    <div className={style.currencyInfoBlock}>
      <table>
        <thead>
          <tr>
            <th>USD</th>
            <th>Change 24 h</th>
            <th>Market Cap Usd</th>
            <th>Max Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currency.priceUsd.slice(0, 7)}</td>
            <td>{`${currency.changePercent24Hr.slice(0, 7)}%`}</td>
            <td>{currency.marketCapUsd.slice(0, 5)}</td>
            <td>{currency.maxSupply ? currency.maxSupply.slice(0, 5) : ''}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Supply</th>
            <th>Usd 24 h</th>
            <th>Vwap 24 h</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currency.symbol.slice(0, 7)}</td>
            <td>{currency.supply.slice(0, 7)}</td>
            <td>{`${currency.volumeUsd24Hr.slice(0, 7)}$`}</td>
            <td>{currency.vwap24Hr.slice(0, 7)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyInfoBlock;
