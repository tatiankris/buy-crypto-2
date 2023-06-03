import React from 'react';
import style from '../../pages/PortfolioModal/PortfolioModal.module.scss';

function DeleteCurrencyButton() {
  const deleteHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <button onClick={deleteHandle} className={style.delete}>
      delete
    </button>
  );
}

export default DeleteCurrencyButton;
