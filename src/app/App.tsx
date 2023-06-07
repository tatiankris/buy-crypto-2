import React, { useMemo } from 'react';
import Header from '../components/Header/Header';
import Routing from '../pages/Routing';
import style from './App.module.scss';
import { withProviders } from './providers/with-providers';
import { ResponseAssetsType } from '../api/api';
import { useGetCurrenciesByIds } from '../processes/query/useGetCurrenciesByIds';

export const UserCurrenciesContext = React.createContext({
  userCurrencies: [] as ResponseAssetsType | null,
});

function App() {
  const { data } = useGetCurrenciesByIds();
  const userCurrencies = useMemo(() => data?.data, [data?.data]);
  return (
    <UserCurrenciesContext.Provider
      value={{ userCurrencies: userCurrencies ? userCurrencies : null }}
    >
      <div className={style.app}>
        <Header />
        <Routing />
      </div>
    </UserCurrenciesContext.Provider>
  );
}

export default withProviders(App);
