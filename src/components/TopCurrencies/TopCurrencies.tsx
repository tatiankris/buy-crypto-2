import React, { useMemo, useState } from 'react';
import style from './TopCurrencies.module.scss';
import { useGetAllCurrencies } from '../../processes/hooks/useGetAllCurrencies';
import { useNavigate } from 'react-router-dom';

function TopCurrencies() {
  const { data } = useGetAllCurrencies(0);
  const currencies = useMemo(() => data?.data, [data?.data]);
  const navigate = useNavigate();
  const handleCurrencyPage = (i: number) => {
    currencies && navigate(`currencies/${currencies[i].id}`);
  };
  const [openTop, setOpenTop] = useState(false);
  const handleOpenTop = () => {
    setOpenTop(true);
  };
  const handleCloseTop = () => {
    setOpenTop(false);
  };

  if (!currencies) {
    return <div>Loading</div>;
  }
  return (
    <div className={style.topCrypto}>
      <div onClick={handleOpenTop} className={`${style.topCrypto__Item} ${style.top_3}`}>
        Top 3
      </div>
      {openTop && (
        <div onClick={handleCloseTop} className={style.topCrypto__Background}>
          <div className={style.topCrypto__Block}>
            <div className={style.background__Close} onClick={handleCloseTop}>
              x
            </div>
            <div
              onClick={() => handleCurrencyPage(0)}
              className={`${style.topCrypto__Item} ${style.topCrypto__Item1}`}
            >
              <span>{currencies[0].name}</span> <b>{currencies[0].priceUsd.slice(0, 7)}</b>
            </div>
            <div
              onClick={() => handleCurrencyPage(1)}
              className={`${style.topCrypto__Item} ${style.topCrypto__Item2}`}
            >
              <span>{currencies[1].name}</span> <b>{currencies[1].priceUsd.slice(0, 7)}</b>
            </div>
            <div
              onClick={() => handleCurrencyPage(2)}
              className={`${style.topCrypto__Item} ${style.topCrypto__Item3}`}
            >
              <span>{currencies[2].name}</span> <b>{currencies[2].priceUsd.slice(0, 7)}</b>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopCurrencies;
