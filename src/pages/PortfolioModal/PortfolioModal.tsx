import React, { useState } from 'react';
import style from './PortfolioModal.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import CLoseButton from '../../shared/CloseButton/CLoseButton';

type PropsType = {
  handleClose: () => void;
};

function PortfolioModal({ handleClose, ...props }: PropsType) {
  const [page, setPage] = useState(0);
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
        <CurrenciesTable page={page} type={'portfolio'} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default PortfolioModal;
