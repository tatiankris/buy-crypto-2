import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header/Header';
import Routing from '../pages/Routing';
import style from './App.module.scss';
import { withProviders } from './providers/with-providers';
import { ResponseAssetsType } from '../api/api';
import { useGetPortfolioValue } from '../processes/hooks/useCalcPortfolioValue';
import { useGetCurrenciesByIds } from '../processes/query/useGetCurrenciesByIds';
import CurrencyChart from '../components/CurrencyChart/CurrencyChart';

export const PortfolioContext = React.createContext({
  // portfolioValue: { newValue: 0, walletDifference: 0, walletPercentDifference: 0 },
  userCurrencies: [] as ResponseAssetsType | null,
});

function App() {
  const { data, refetch } = useGetCurrenciesByIds();
  const userCurrencies = useMemo(() => data?.data, [data?.data]);

  return (
    <PortfolioContext.Provider value={{ userCurrencies: userCurrencies ? userCurrencies : null }}>
      <div className={style.app}>
        <Header />
        <Routing />
      </div>
    </PortfolioContext.Provider>
  );
}

export default withProviders(App);
