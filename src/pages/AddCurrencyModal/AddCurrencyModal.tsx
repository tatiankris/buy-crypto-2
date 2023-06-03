import React, { useState } from 'react';
import style from './AddCurrencyModal.module.scss';
import CLoseButton from '../../shared/CloseButton/CLoseButton';

type PropsType = {
  handleClose: () => void;
};

function AddCurrencyModal({ handleClose, ...props }: PropsType) {
  return (
    <div onClick={handleClose} className={style.modal}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.paper}
      >
        <CLoseButton handleClose={handleClose} />
        <h2>Buy Bitcoin</h2>
        <form onSubmit={() => {}}>
          <input type={'number'} step={0.000001} />
          <button className={style.submit} type={'submit'}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCurrencyModal;
