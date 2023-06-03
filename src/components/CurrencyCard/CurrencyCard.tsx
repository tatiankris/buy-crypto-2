import React, { useState } from 'react';
import style from './CurrencyCard.module.scss';
import { useNavigate } from 'react-router-dom';
import AddCurrencyButton from '../AddCurrencyButton/AddCurrencyButton';
import DeleteCurrencyButton from '../../shared/DeleteCurrencyButton/DeleteCurrencyButton';

type PropsType = {
  currency: { name: string; priceUsd: string; changePercent24Hr: string };
  type: 'portfolio' | 'main';
};
function CurrencyCard({ type, currency, ...props }: PropsType) {
  const navigate = useNavigate();

  const handleCurrencyPage = () => {
    navigate('bitcoin');
  };

  const c = currency;
  return (
    <tr onClick={handleCurrencyPage} className={style.row}>
      <td className={style.column}>{c.name}</td>
      {type === 'main' && <td className={style.column}>{c.changePercent24Hr}</td>}
      <td className={style.column}>{c.priceUsd}</td>
      {type === 'main' && (
        <td className={style.column}>
          <AddCurrencyButton />
        </td>
      )}
      {type === 'portfolio' && (
        <td className={style.column}>
          <DeleteCurrencyButton />
        </td>
      )}
    </tr>
  );
}

export default CurrencyCard;
