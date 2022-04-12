import { Component } from 'react';

import './app.css';


class WhoAmI extends Component {
    //constructor(props) - именно сюда передаем пропс и вводим наши данные динамические    
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
        //state() - объект который содержит ДИНАМИЧЕСКИЕ свойства
    }  //пропсы менять НЕЛЬЗЯ они только для чтения

    nextYear = () => {
        // this.setState({//обязательный метод для изменения состояния свойства
        //     years: this.state.years + 1  //переписываем наш возраст и говорим что он изменяется 
        // })
        this.setState(state => ({//прописываем функцию , которая как аргумент передает состояние
            //эта функция содержит другой объект
            //функция обернут в круглые скобки вместо слова return, обозначает что надо вернуть то что внутри
            years: state.years + 1
        }))
    }
    //а вот состояния менять можно
    //если конструктор содержит только конструкцию super(), то конструктор можно полностью удалить
    //render() - то что выводится на страницу
    render() {
        const { name, surname, link } = this.props; //вытаскиваем переменные из ообъекта props
        return (
            <div>
                <button onClick={this.nextYear} >{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        );
    }

}


function App() {
    return (
        <div className="app">
            < WhoAmI name='John' surname='Smith' link='facebook.com' />
            < WhoAmI name='Ira' surname='Hlaz' link='vk.com' />
        </div>
    );
}

export default App;