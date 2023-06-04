import React, { useEffect, useState } from 'react';
import style from './PortfolioButton.module.scss';
import { ReactComponent as IconPortfolio } from '../../assets/wallet.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWallet } from '../../processes/getUserWalletValue';

function PortfolioButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const oldStringifyWalletValue = localStorage.getItem('walletValue');
  const oldWalletValue = oldStringifyWalletValue ? JSON.parse(oldStringifyWalletValue) : 0;
  const walletValue = useWallet();
  const walletDifference = oldWalletValue > 0 ? walletValue - oldWalletValue : 0;
  const walletPercentDifference =
    oldWalletValue > 0 ? walletValue / (oldWalletValue / 100) - 100 : 0;

  const handleOpenModal = () => {
    navigate('portfolio', { state: { background: location } });
  };

  return (
    <div className={style.portfolio}>
      <span>
        {`${String(walletValue).slice(0, 9)} ${walletDifference > 0 ? '+' : ''}${String(
          walletDifference
        ).slice(0, 4)} (${walletPercentDifference > 0 ? '+' : ''}${String(
          walletPercentDifference
        ).slice(0, 4)}%)`}
      </span>
      <button onClick={handleOpenModal} className={style.portfolioButton}>
        <IconPortfolio style={{ height: '40px', width: '40px' }} />
      </button>
    </div>
  );
}

export default PortfolioButton;
