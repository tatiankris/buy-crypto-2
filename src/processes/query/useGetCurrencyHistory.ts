import { useQuery } from 'react-query';
import { coinsAPI } from '../../api/api';

export const useGetCurrencyHistory = (id: string | null) => {
  return useQuery(['currencyHistory', id], async () => {
    if (id) {
      return await coinsAPI.getAssetsItemHistory(id ? id : '');
    }
  });
};
