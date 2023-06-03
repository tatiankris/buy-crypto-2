import React from 'react';
import style from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import TopCurrencies from '../TopCurrencies/TopCurrencies';

function Header() {
  const navigate = useNavigate();
  const handleMain = () => {
    navigate('/');
  };

  return (
    <div className={style.header}>
      <div onClick={handleMain} className={style.logo}>
        BuyCrypto
      </div>
      <PortfolioButton />
      <TopCurrencies />
    </div>
  );
}

export default Header;
