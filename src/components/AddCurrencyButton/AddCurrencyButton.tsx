import React, { useState } from 'react';
import style from './AddCurrencyButton.module.scss';
import AddCurrencyModal from '../../pages/AddCurrencyModal/AddCurrencyModal';
import { useLocation, useNavigate } from 'react-router-dom';

function AddCurrencyButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    navigate('add', { state: { background: location } });
  };
  return (
    <div>
      <button onClick={handleOpenModal} className={style.addButton}>
        +
      </button>
    </div>
  );
}

export default AddCurrencyButton;
