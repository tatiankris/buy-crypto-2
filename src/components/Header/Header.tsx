import React from 'react';
import style from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import TopCurrencies from '../TopCurrencies/TopCurrencies';
import PortfolioValue from '../PortfolioValue/PortfolioValue';

import { ReactComponent as Logo } from '../../assets/icons8-crypto.svg';

function Header() {
  const navigate = useNavigate();
  const handleMain = () => {
    navigate('/');
  };
  return (
    <div className={style.header}>
      <div onClick={handleMain} className={style.logo}>
        <Logo className={style.logo__svg} />
        <span>uyCrypto</span>
      </div>
      <div className={style.portfolio}>
        <PortfolioValue />
        <PortfolioButton />
      </div>
      <TopCurrencies />
    </div>
  );
}

export default Header;
