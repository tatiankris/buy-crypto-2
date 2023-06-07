import React, { useEffect, useMemo } from 'react';
import style from './CurrencyPage.module.scss';
import AddCurrencyButton from '../../components/AddCurrencyButton/AddCurrencyButton';
import { withContainerProvider } from '../../app/providers/with-providers';
import { useParams } from 'react-router-dom';
import { useGetCurrency } from '../../processes/query/useGetCurrency';
import { useGetCurrencyHistory } from '../../processes/query/useGetCurrencyHistory';
import CurrencyChart from 'components/CurrencyChart/CurrencyChart';

function CurrencyPage() {
  const { id } = useParams();
  const currencyObj = useGetCurrency(id ? id : null);
  const currencyHistoryObj = useGetCurrencyHistory(id ? id : null);
  const currencyData = useMemo(() => currencyObj.data?.data.data, [currencyObj.data?.data.data]);
  const currencyHistory = useMemo(
    () => currencyHistoryObj.data?.data.data,
    [currencyHistoryObj.data?.data.data]
  );

  console.log('hist', currencyHistory);

  useEffect(() => {
    currencyObj.refetch();
    currencyHistoryObj.refetch();
  }, []);

  if (!currencyData) {
    return <div className={style.paper}> Not found currency</div>;
  }
  return (
    <div className={style.currency}>
      <div className={style.paper}>
        <h3>{currencyData.name}</h3>
        <AddCurrencyButton id={id ? id : ''} />
        <ul>
          <li>{currencyData.priceUsd}</li>
          <li>{currencyData.changePercent24Hr}</li>
          <li>{currencyData.marketCapUsd}</li>
          <li>{currencyData.maxSupply}</li>
          <li>{currencyData.symbol}</li>
          <li>{currencyData.supply}</li>
          <li>{currencyData.volumeUsd24Hr}</li>
          <li>{currencyData.vwap24Hr}</li>
        </ul>
        <CurrencyChart history={currencyHistory} />
      </div>
    </div>
  );
}

export default withContainerProvider(CurrencyPage);
