import React, { useMemo, useState } from 'react';
import style from './PortfolioModal.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import CLoseButton from '../../shared/CloseButton/CLoseButton';
import { getUsersCurrencies } from '../../processes/getLocalStorageData';
import { useGetCurrenciesByIds } from '../../processes/query/useGetCurrenciesByIds';

type PropsType = {
  handleClose: () => void;
};

function PortfolioModal({ handleClose, ...props }: PropsType) {
  const [page, setPage] = useState(0);

  const { data } = useGetCurrenciesByIds();
  const currencies = useMemo(() => data?.data, [data?.data]);

  console.log('currencies', currencies);
  return (
    <div className={style.modal} onClick={handleClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.paper}
      >
        <CLoseButton handleClose={handleClose} />
        <h2>Crypto Portfolio</h2>
        {!currencies && <div>Empty</div>}
        {currencies && (
          <div>
            <CurrenciesTable
              userCurrencies={getUsersCurrencies()}
              page={page}
              type={'portfolio'}
              currencies={currencies.length ? currencies.slice(page * 6, page * 6 + 6) : null}
            />
            <Pagination itemsCount={currencies.length} page={page} setPage={setPage} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioModal;
