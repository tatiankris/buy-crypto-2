import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header/Header';
import Routing from '../pages/Routing';
import style from './App.module.scss';
import { withProviders } from './providers/with-providers';
import { ResponseAssetsType } from '../api/api';
import { useGetPortfolioValue } from '../processes/hooks/useCalcPortfolioValue';
import { useGetCurrenciesByIds } from '../processes/query/useGetCurrenciesByIds';

export const PortfolioContext = React.createContext({
  portfolioValue: { newValue: 0, walletDifference: 0, walletPercentDifference: 0 },
  userCurrencies: [] as ResponseAssetsType | null,
});

function App() {
  const [portfolioValue, setPortfolioValue] = useState({
    newValue: 0,
    walletDifference: 0,
    walletPercentDifference: 0,
  });
  const { data, refetch } = useGetCurrenciesByIds();
  useEffect(() => {
    refetch();
  });
  const userCurrencies = useMemo(() => data?.data, [data?.data]);
  useGetPortfolioValue(setPortfolioValue, userCurrencies ? userCurrencies : null);

  return (
    <PortfolioContext.Provider
      value={{ portfolioValue, userCurrencies: userCurrencies ? userCurrencies : null }}
    >
      <div className={style.app}>
        <Header />
        <Routing />
      </div>
    </PortfolioContext.Provider>
  );
}

export default withProviders(App);
