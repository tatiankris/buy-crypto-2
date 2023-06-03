import React, { useState } from 'react';
import style from './MainPage.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import { withContainerProvider } from '../../app/providers/with-providers';

function MainPage() {
  return (
    <div className={style.main}>
      <h2>Coins</h2>
      <CurrenciesTable type={'main'} />
      <Pagination />
    </div>
  );
}

export default withContainerProvider(MainPage);
