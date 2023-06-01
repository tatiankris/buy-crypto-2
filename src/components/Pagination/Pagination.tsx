import React from 'react';
import style from './Pagination.module.scss';

function Pagination() {
    return (
        <div className={style.pagination}>
                <button>⬅</button>
                <button className={style.current}>1</button>
                <button>2</button>
                <button>3</button>
                <button>➡</button>
        </div>
    );
}

export default Pagination;