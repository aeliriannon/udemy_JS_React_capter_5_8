import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import MarvelService from './services/MarvelService';

import './style/style.scss';

const marvelService = new MarvelService; //в этой переменной будет храниться потомок нашего класса
// marvelService.getCharacter(1011052).then(res => console.log(res));
//берем экземпляр нашего класса, вызываем метод получения персонажей  говорим, чтобы результат вывели в консоль
marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));
//берем наши результаты и говорим что из массива data.results мы хотим вывести в консоль все имена персонажей

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

