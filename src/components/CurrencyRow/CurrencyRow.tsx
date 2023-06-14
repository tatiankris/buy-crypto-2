import React from 'react';
import style from './CurrencyRow.module.scss';
import { useNavigate } from 'react-router-dom';
import AddCurrencyButton from '../AddCurrencyButton/AddCurrencyButton';
import DeleteCurrencyButton from '../../shared/DeleteCurrencyButton/DeleteCurrencyButton';
import { ResponseItemType } from '../../api/api';
import CryptoIcon from '../../shared/CryptoIcon';
import { refactorNum } from '../../processes/abbrNum';

type PropsType = {
  currency: ResponseItemType | 'loading';
  type: 'portfolio' | 'main';
  userCurrencies?: Array<{ id: string; value: number }>;
};
function CurrencyRow({ type, currency, userCurrencies, ...props }: PropsType) {
  const navigate = useNavigate();
  const userCurrency =
    userCurrencies && currency !== 'loading' && userCurrencies.find((v) => v.id === currency.id);
  const userValue = userCurrency && userCurrency.value;
  const handleCurrencyPage = () => {
    type === 'main' && currency !== 'loading' && navigate(`${currency.id}`);
  };

  if (currency === 'loading') {
    return (
      <tr className={`${style.row} ${type === 'main' ? style.row_Main : ''}`}>
        {[...Array(7)].map((item, index) => (
          <td
            key={index}
            style={{ height: '70px', backgroundColor: 'rgb(234,234,234)' }}
            className={`${style.column}`}
          ></td>
        ))}
      </tr>
    );
  }
  const c = {} as ResponseItemType;
  if (currency) {
    let prop: keyof ResponseItemType;
    for (prop in currency) {
      c[prop] = refactorNum(+currency[prop]);
    }
  }
  const userCount = userValue ? refactorNum(userValue) : '';

  return (
    <tr
      onClick={handleCurrencyPage}
      className={`${style.row} ${type === 'main' ? style.row_Main : ''}`}
    >
      <td className={`${style.column}`}>
        <div className={`${style.name}`}>
          {type === 'main' && (
            <div className={`${style.name__icon}`}>
              <CryptoIcon name={currency.symbol.toLowerCase()} size={20} />
            </div>
          )}
          <div>
            {`${currency.name} `}
            {type === 'main' && <span className={style.column__symbol}>{currency.symbol}</span>}
          </div>
        </div>
      </td>
      {type === 'portfolio' && (
        <td className={`${style.column} ${type === 'portfolio' ? style.usersCountColumn : ''}`}>
          <span className={style.column_usersCount}>{userCount} </span>
          {currency.symbol}
        </td>
      )}
      <td className={style.column}>{`$${c.priceUsd}`}</td>
      {type === 'main' && <td className={style.column}>{`${c.changePercent24Hr}%`}</td>}
      {type === 'main' && <td className={style.column}>{`$${c.marketCapUsd}`}</td>}
      {type === 'main' && <td className={`${style.column}`}>{`${c.supply} ${currency.symbol}`}</td>}
      {type === 'main' && <td className={style.column}>{`$${c.vwap24Hr}`}</td>}
      {type === 'main' && (
        <td className={style.column}>
          <AddCurrencyButton id={currency.id} />
        </td>
      )}
      {type === 'portfolio' && (
        <td className={style.column}>
          <DeleteCurrencyButton id={currency.id} />
        </td>
      )}
    </tr>
  );
}

export default CurrencyRow;
