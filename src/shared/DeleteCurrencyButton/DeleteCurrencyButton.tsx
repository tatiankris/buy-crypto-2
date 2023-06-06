import React from 'react';
import style from './DeleteCurrencyButton.module.scss';
import { removeFromPortfolio } from '../../processes/updatePortfolio';
type PropsType = {
  id: string;
};
function DeleteCurrencyButton({ id }: PropsType) {
  const deleteHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    removeFromPortfolio(id);
  };
  return (
    <button onClick={deleteHandle} className={style.delete}>
      Delete
    </button>
  );
}

export default DeleteCurrencyButton;
