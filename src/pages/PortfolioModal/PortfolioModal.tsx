import React from 'react';
import style from './PortfolioModal.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import CurrenciesTable from '../../components/CurrenciesTable/CurrenciesTable';
import CLoseButton from '../../shared/CloseButton/CLoseButton';

type PropsType = {
  handleClose: () => void;
};

function PortfolioModal({ handleClose, ...props }: PropsType) {
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
        <CurrenciesTable type={'portfolio'} />
        <Pagination />
      </div>
    </div>
  );
}

export default PortfolioModal;
