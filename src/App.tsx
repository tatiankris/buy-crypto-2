import React from 'react';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={style.App}>
      <Header />
        <div className={style.container}>
            <Main/>
        </div>
    </div>
  );
}

export default App;
