import React from 'react'
import style from './Portfolio.module.scss'
import Pagination from "../../Pagination/Pagination";

type PropsType = {
    handleClose: () => void
}

function Portfolio ({handleClose, ...props}: PropsType) {
    const handleCurrencyPage = () => {}
    return (
        <div className={style.modal} onClick={handleClose}>
            <div onClick={(e) => {e.stopPropagation()}} className={style.paper}>
                <button onClick={handleClose} className={style.close}>x</button>
                <h2>Crypto Portfolio</h2>
                <table className={style.table}>
                    <thead className={style.thead}>
                    <tr>
                        <th>name</th>
                        <th>USD</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody className={style.tbody}>
                    <tr onClick={handleCurrencyPage} className={style.row}>
                        <td className={style.column}>Bitcoin</td>
                        <td className={style.column}>USD</td>
                        <td className={style.column}><button className={style.delete}>delete</button></td>
                    </tr>
                    <tr onClick={handleCurrencyPage} className={style.row}>
                        <td className={style.column}>Bitcoin</td>
                        <td className={style.column}>USD</td>
                        <td className={style.column}>delete</td>
                    </tr>
                    <tr onClick={handleCurrencyPage} className={style.row}>
                        <td className={style.column}>Bitcoin</td>
                        <td className={style.column}>USD</td>
                        <td className={style.column}>delete</td>
                    </tr>
                    <tr onClick={handleCurrencyPage} className={style.row}>
                        <td className={style.column}>Bitcoin</td>
                        <td className={style.column}>USD</td>
                        <td className={style.column}>delete</td>
                    </tr>
                    </tbody>
                </table>
                <div>
                   <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Portfolio