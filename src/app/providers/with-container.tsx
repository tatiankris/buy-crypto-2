import React from 'react';
import style from '../styles/Container.module.scss';

export const withContainer = (component: () => React.ReactNode) => () =>
  <div className={style.container}>{component()}</div>;
