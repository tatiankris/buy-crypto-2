import React, { useState } from 'react';
import style from './PortfolioButton.module.scss';
import { ReactComponent as IconPortfolio } from '../../assets/wallet.svg';
import { useLocation, useNavigate } from 'react-router-dom';

function PortfolioButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOpenModal = () => {
    navigate('portfolio', { state: { background: location } });
  };
  return (
    <div className={style.portfolio}>
      <span>134,32 USD +2,38 (1,80 %)</span>
      <button onClick={handleOpenModal} className={style.portfolioButton}>
        <IconPortfolio style={{ height: '40px', width: '40px' }} />
      </button>
    </div>
  );
}

export default PortfolioButton;
