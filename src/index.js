import React from 'react';
import ReactDOM from 'react-dom';
import './asset/index.css';
import {App} from './view/App';
import reportWebVitals from './service/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
