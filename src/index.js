import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/app.scss";
import App from './App';
import { initStorage } from './data/store';
// import reportWebVitals from './reportWebVitals';

if (localStorage.getItem("events") === null){
  initStorage()
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
