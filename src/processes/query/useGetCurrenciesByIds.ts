import { useQuery } from 'react-query';
import { coinsAPI } from '../../api/api';
import { getUsersCurrenciesIds } from '../getLocalStorageData';

export const useGetCurrenciesByIds = () => {
  const userCurrenciesIds = getUsersCurrenciesIds();
  return useQuery(
    ['walletCurrencies', userCurrenciesIds],
    async () => {
      if (!userCurrenciesIds.length) {
        return;
      }
      return await coinsAPI.getAssetsWithIds(userCurrenciesIds.join());
    },
    { refetchOnWindowFocus: false, enabled: false }
  );
};
