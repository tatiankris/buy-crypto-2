import React, {useState} from 'react'
import style from './Main.module.scss'
import AddCurrency from "../modals/AddCurrency/AddCurrency";
import Pagination from "../Pagination/Pagination";

function Main () {

    const handleBuy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        setOpen(true)
    }
    const handleCurrencyPage = () => {

    }
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className={style.main}>
            <h2>Coins</h2>
            <table className={style.table}>
                <thead className={style.thead}>
                    <tr>
                        <th>name</th>
                        <th>24h change</th>
                        <th>usd</th>
                        <th>buy</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                <tr onClick={handleCurrencyPage} className={style.row}>
                    <td className={style.column}>Bitcoin</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}>
                        <button onClick={handleBuy} className={style.addButton}>+</button>
                        {open && <AddCurrency handleClose={handleClose} />}
                    </td>
                </tr>
                <tr  className={style.row}>
                    <td className={style.column}>Ethereum</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}><button className={style.addButton}>+</button></td>
                </tr>
                <tr className={style.row}>
                    <td className={style.column}>Bitcoin</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}><button className={style.addButton}>+</button></td>
                </tr>
                <tr  className={style.row}>
                    <td className={style.column}>Ethereum</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}><button className={style.addButton}>+</button></td>
                </tr>
                <tr className={style.row}>
                    <td className={style.column}>Bitcoin</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}><button className={style.addButton}>+</button></td>
                </tr>
                <tr  className={style.row}>
                    <td className={style.column}>Ethereum</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}><button className={style.addButton}>+</button></td>
                </tr>
                <tr className={style.row}>
                    <td className={style.column}>Bitcoin</td>
                    <td className={style.column}>percent24Hr</td>
                    <td className={style.column}>priceUsd</td>
                    <td className={style.column}><button className={style.addButton}>+</button></td>
                </tr>
                </tbody>
            </table>
            <div className={style.pagination}>
                <Pagination />
            </div>
        </div>
    )
}

export default Main