import React from 'react';
import style from './CurrencyPage.module.scss';
import AddCurrencyButton from '../../components/AddCurrencyButton/AddCurrencyButton';
import { withContainerProvider } from '../../app/providers/with-providers';
import { useParams } from 'react-router-dom';

function CurrencyPage() {
  const { id } = useParams();
  return (
    <div className={style.currency}>
      <div className={style.paper}>Info</div>
      <AddCurrencyButton id={id ? id : ''} />
    </div>
  );
}

export default withContainerProvider(CurrencyPage);
