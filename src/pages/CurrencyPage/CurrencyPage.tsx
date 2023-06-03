import React from 'react';
import style from './CurrencyPage.module.scss';
import AddCurrencyButton from '../../components/AddCurrencyButton/AddCurrencyButton';
import { withContainerProvider } from '../../app/providers/with-providers';

function CurrencyPage() {
  return (
    <div className={style.currency}>
      <div className={style.paper}>Info</div>
      <AddCurrencyButton />
    </div>
  );
}

export default withContainerProvider(CurrencyPage);
