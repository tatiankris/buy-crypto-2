import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
  // headers: { }
});

export const coinsAPI = {
  async getAssets(page: number) {
    const res = await instance.get<AxiosResponseAssetsType>('assets', {
      params: { limit: '6', offset: String(page) },
    });
    return res.data;
  },
  getAssetsItem(id: string) {
    return instance.get(`assets/${id}`);
  },
  getAssetsItemHistory(id: string) {
    return instance.get(`assets/${id}/history`, { params: { interval: 'd1' } });
  },
};

type ResponseAssetsType = Array<{
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}>;

type AxiosResponseAssetsType = { data: ResponseAssetsType };
