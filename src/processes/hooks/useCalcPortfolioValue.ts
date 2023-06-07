import { getUsersCurrencies } from '../getLocalStorageData';
import { useEffect } from 'react';
import { ResponseAssetsType } from '../../api/api';

export const useCalcPortfolioValue = (currencies: ResponseAssetsType | null) => {
  const usdSum = { sum: 0 };

  const usersCurrencies = getUsersCurrencies();

  for (const prop in usersCurrencies) {
    const currency = currencies && currencies.find((c) => c.id === usersCurrencies[+prop].id);
    const newUsdValue = currency && +currency.priceUsd * usersCurrencies[+prop].value;

    if (newUsdValue) {
      usdSum.sum = usdSum.sum + newUsdValue;
    }
  }
  return { newValue: usdSum.sum };
};

export const useGetPortfolioValue = (userCurrencies: ResponseAssetsType | null) => {
  const oldStringifyWalletValue = localStorage.getItem('walletValue');
  console.log('old', oldStringifyWalletValue);
  const oldValue = oldStringifyWalletValue ? +oldStringifyWalletValue : 0;

  const { newValue } = useCalcPortfolioValue(userCurrencies);
  const walletDifference = newValue - oldValue;
  const percent = newValue / (oldValue / 100) - 100;
  const walletPercentDifference = isNaN(percent) ? 0 : percent;

  localStorage.setItem('walletValue', String(newValue));
  return { newValue, walletDifference, walletPercentDifference };
};

export type PortfolioValueType = {
  newValue: number;
  walletDifference: number;
  walletPercentDifference: number;
};
