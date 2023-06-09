import React from 'react';
import style from './CurrencyCard.module.scss';
import { useNavigate } from 'react-router-dom';
import AddCurrencyButton from '../AddCurrencyButton/AddCurrencyButton';
import DeleteCurrencyButton from '../../shared/DeleteCurrencyButton/DeleteCurrencyButton';

type PropsType = {
  currency: { name: string; priceUsd: string; changePercent24Hr: string; id: string };
  type: 'portfolio' | 'main';
  userCurrencies?: Array<{ id: string; value: number }>;
};
function CurrencyCard({ type, currency, userCurrencies, ...props }: PropsType) {
  const navigate = useNavigate();
  const c = currency;
  const userCurrency = userCurrencies && userCurrencies.find((v) => v.id === c.id);
  const userValue = userCurrency && String(userCurrency.value);
  const handleCurrencyPage = () => {
    navigate(`${c.id}`);
  };

  return (
    <tr onClick={handleCurrencyPage} className={style.row}>
      <td className={style.column}>{c.name}</td>
      {type === 'portfolio' && <td className={style.column}>{userValue?.slice(0, 9)}</td>}
      <td className={style.column}>{c.priceUsd.slice(0, 9)}</td>
      {type === 'main' && <td className={style.column}>{c.changePercent24Hr.slice(0, 9)}</td>}
      {type === 'main' && (
        <td className={style.column}>
          <AddCurrencyButton id={c.id} />
        </td>
      )}
      {type === 'portfolio' && (
        <td className={style.column}>
          <DeleteCurrencyButton id={c.id} />
        </td>
      )}
    </tr>
  );
}

export default CurrencyCard;
