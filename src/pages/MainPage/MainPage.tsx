import React, { useState } from 'react';
import style from './MainPage.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import { withContainerProvider } from '../../app/providers/with-providers';

function MainPage() {
  const [page, setPage] = useState(0);
  return (
    <div className={style.main}>
      <h2>Coins</h2>
      <CurrenciesTable type={'main'} page={page} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default withContainerProvider(MainPage);
