import React, { useContext } from 'react';
import { PortfolioContext } from '../../app/App';

function PortfolioValue() {
  const { portfolioValue } = useContext(PortfolioContext);
  const { newValue, walletDifference, walletPercentDifference } = portfolioValue;
  return (
    <span>
      {`${String(newValue).slice(0, 9)} ${walletDifference > 0 ? '+' : ''}${String(
        walletDifference
      ).slice(0, 4)} (${walletPercentDifference > 0 ? '+' : ''}${String(
        walletPercentDifference
      ).slice(0, 4)}%)`}
    </span>
  );
}

export default PortfolioValue;
