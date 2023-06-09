import React from 'react';
import { useProfileStore } from '../../store/portfolio-store';

function PortfolioValue() {
  const profileValue = useProfileStore((state) => state.profileValue);
  const { newValue, walletDifference, walletPercentDifference } = profileValue
    ? profileValue
    : { newValue: 0, walletDifference: 0, walletPercentDifference: 0 };

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
