import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//StrictMode (строгий режим) - то же самое, что 'use strict'
//Инструмент для потенциальных угроз и ошибок в приложении
//Помогает обнаружить устаревшие и небезопасные конструкции
//Может использоваться как обертка для всего проекта, а можно обернуть выборочный компонент

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);