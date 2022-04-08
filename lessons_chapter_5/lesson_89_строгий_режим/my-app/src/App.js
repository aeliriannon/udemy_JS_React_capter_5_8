import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>;
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styleField = { //создаем объект со стилями внутри - ключ - width, значение строка - 300px
//     width: '300px'
//   };
//   return <input placeholder={holder} type="text" style={styleField} />;
// }

//Пишем компонент с помощью классового подхода
//Чтобы классы правильно заработали, сюда надо импортировать главный компонент, от которого мы отпочкуем наш класс
class Field extends Component {
  render() { //обязательный главный метод 
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };

    return <input
      placeholder={holder}
      type="text"
      style={styleField} />;
  }
}

//можем для создания компонентов использовать как стрелочную ф-цию, так и обычную
function Btn() {
  const text = 'Log in';
  // const res = () => {
  //   return 'Log in';
  // }
  // return <button>{res()}</button> //вставляем текст с помощью функции, раотает так же, как  через простую переменную
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
  //проверяем с помощью тернарного опертора, если logged = true, то выводим сообщение Enter
  // Если logged = false, то выводим текст из переменной текст
  //стандартный условный оператор конструкции if...else использовать нельзя внутри фигурных скобок
}

// React - компонент
function App() { // создание компонента (имя с большой буквы)
  return ( //ключевое слово return, что нам содержимое необходимо вернуть (круглые скобки, так как структура многсотрочна)
    //корневой элемент, в который помещаются все необходиые многострочные элементы
    //Внутрь добавляем наш простейший компонент
    //(если надо чтобы внутри компонента что то еще было, то он будет с двойным тегом, а не одинарным)
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header }; //экспорт можно делать именованный
export default App;
