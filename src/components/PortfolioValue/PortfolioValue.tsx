import React, { useContext, useState } from 'react';
import { PortfolioContext } from '../../app/App';
import { useGetPortfolioValue } from '../../processes/hooks/useCalcPortfolioValue';

function PortfolioValue() {
  const { userCurrencies } = useContext(PortfolioContext);

  const { newValue, walletDifference, walletPercentDifference } = useGetPortfolioValue(
    userCurrencies ? userCurrencies : null
  );

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
