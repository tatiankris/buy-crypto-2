import React from 'react';
import Header from '../components/Header/Header';
import Routing from '../pages/Routing';
import style from './App.module.scss';
import { withProviders } from './providers/with-providers';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routing />
    </div>
  );
}

export default withProviders(App);
