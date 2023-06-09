import React from 'react';
import style from './DeleteCurrencyButton.module.scss';
import { removeFromPortfolio } from '../../processes/updatePortfolio';
import { useProfileStore } from '../../store/portfolio-store';
type PropsType = {
  id: string;
};
function DeleteCurrencyButton({ id }: PropsType) {
  const deleteCurrency = useProfileStore((state) => state.deleteCurrency);

  const deleteHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteCurrency(id);
    // removeFromPortfolio(id);
  };
  return (
    <button onClick={deleteHandle} className={style.delete}>
      Delete
    </button>
  );
}

export default DeleteCurrencyButton;
