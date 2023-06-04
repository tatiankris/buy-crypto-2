import { getUsersCurrencies, getUsersCurrenciesIds } from './getLocalStorageData';
import { useQuery } from 'react-query';
import { coinsAPI } from './api';

export const useWallet = () => {
  const usdSum = { sum: 0 };
  const userCurrenciesIds = getUsersCurrenciesIds();
  const { data } = useQuery(
    ['walletCurrencies', userCurrenciesIds],
    async () => {
      if (!userCurrenciesIds.length) {
        return;
      }
      return await coinsAPI.getAssetsWithIds(userCurrenciesIds.join());
    },
    { refetchOnWindowFocus: false }
  );
  const currencies = data?.data;
  const usersCurrencies = getUsersCurrencies();
  for (const prop in usersCurrencies) {
    const currency = currencies && currencies.find((c) => c.id === usersCurrencies[+prop].id);
    const newUsdValue = currency && +currency.priceUsd * usersCurrencies[+prop].value;

    if (newUsdValue) {
      usdSum.sum = usdSum.sum + newUsdValue;
    }
  }
  usdSum.sum > 0 && localStorage.setItem('walletValue', JSON.stringify(usdSum.sum));
  return usdSum.sum;
};
