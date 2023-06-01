import React, {useState} from 'react'
import style from './Header.module.scss'
import {ReactComponent as IconPortfolio} from '../../assets/wallet.svg'
import Portfolio from "../modals/Portfolio/Portfolio";

function Header () {
    const handleMain = () => {}
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className={style.header}>
            <div onClick={handleMain} className={style.logo}>BuyCrypto</div>
            <div className={style.portfolio}>
                <span>134,32 USD +2,38 (1,80 %)</span>
                <button onClick={handleOpen} className={style.portfolioButton}><IconPortfolio style={{height: '40px', width: '40px'}} /></button>
                {open && <Portfolio handleClose={handleClose} />}
            </div>
            <div className={style.topCrypto}>
                <div className={style.firstChild}>BTC 222$</div>
                <div className={style.secChild}>ETH 333$</div>
                <div className={style.thirdChild}>DGC 456$</div>
            </div>
        </div>
    )
}

export default Header
