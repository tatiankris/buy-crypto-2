import React, { useState } from 'react';
import style from './MainPage.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import { withContainerProvider } from '../../app/providers/with-providers';
import { useQuery } from 'react-query';
import { coinsAPI } from '../../processes/api';

function MainPage() {
  const [page, setPage] = useState(0);
  const { data } = useQuery(['currencies', page], async () => {
    return await coinsAPI.getAssets(page, 6);
  });
  const currencies = data && data.data;

  return (
    <div className={style.main}>
      <h2>Coins</h2>
      <CurrenciesTable type={'main'} page={page} currencies={currencies ? currencies : null} />
      <Pagination itemsCount={2000} page={page} setPage={setPage} />
    </div>
  );
}

export default withContainerProvider(MainPage);
