import React, { useEffect } from 'react';
import style from './CurrencyPage.module.scss';
import AddCurrencyButton from '../../components/AddCurrencyButton/AddCurrencyButton';
import { withContainerProvider } from '../../app/providers/with-providers';
import { useParams } from 'react-router-dom';
import CurrencyChart from 'components/CurrencyInfoBlock/CurrencyChart/CurrencyChart';
import { useCurrencyStore } from '../../store/currency-store';
import CurrencyInfoBlock from '../../components/CurrencyInfoBlock/CurrencyInfoBlock';

function CurrencyPage() {
  const { id } = useParams();
  const currencyData = useCurrencyStore((state) => state.currentCurrency);
  const setCurrentCurrency = useCurrencyStore((state) => state.setCurrentCurrency);
  const currencyHistory = useCurrencyStore((state) => state.currencyHistory);
  const setCurrencyHistory = useCurrencyStore((state) => state.setCurrencyHistory);

  useEffect(() => {
    id && setCurrentCurrency(id);
    id && setCurrencyHistory(id);
  }, [id]);

  if (!currencyData) {
    return <div className={style.paper}> Not found currency</div>;
  }
  return (
    <div className={style.currency}>
      <div className={style.paper}>
        <div className={style.currency__Title}>
          <h2>{currencyData.name}</h2>
          <AddCurrencyButton id={id ? id : ''} />
        </div>
        <CurrencyInfoBlock currency={currencyData} />
        {currencyHistory && <CurrencyChart history={currencyHistory} />}
      </div>
    </div>
  );
}

export default withContainerProvider(CurrencyPage);
