import React, {useState} from 'react'
import style from './AddCurrency.module.scss'

type PropsType = {
    handleClose: () => void
}

function AddCurrency ({handleClose, ...props}: PropsType) {

    return (
        <div onClick={handleClose} className={style.modal}>
            <div onClick={(e) => {e.stopPropagation()}}  className={style.paper}>
                <button onClick={handleClose} className={style.close}>x</button>
                <h2>Buy Bitcoin</h2>
                <form onSubmit={() => {}}>
                    <input type={'number'} step={0.000001}/>
                    <button className={style.submit} type={'submit'}>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddCurrency
