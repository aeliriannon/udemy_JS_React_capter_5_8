import React from 'react'
import { Component } from 'react';

import './app.css';


class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''  //сюда записываем введенные данные в инпут
        }
        // this.nextYear =  this.nextYear.bind(this); //первый способ - Если используем обработчик события и используем обычную функцию,
        // //то здесь записываем вот такую конструкцию где говорим, что
        // //указываем свойство нашего экземпляра класса и присваеиваем ему значение
        // //наш метод this.nextYear байндим и привязывем к конкретному экземпляру класса (this)
    }
    // nextYear() { //первый способ
    //     this.setState(state => ({
    //         years: state.years + 1
    //     }))

    // }

    nextYear = () => { //второй способ избежать потери this это использование стрелочных функций
        this.setState(state => ({
            years: state.years + 1
        }))

    }
    // nextYear() { //третий способ
    //     this.setState(state => ({
    //         years: state.years + 1
    //     }))

    // }

    CommitInputChanges = (e, color) => { //и сюда передаем вторым аргументом, тот что указан в стрелочной функции при вызове этого метода
        // console.log(e.target.value); //выясняем на каком элементе произошло соытие
        // //если появиться значение значит все правильно
        this.setState({
            position: e.target.value //записываем новое состояние нашего свойства позишен
        })

    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;//третий способ избежать потери this это при вызове события использовать анонимную стрелочную функцию
        return (
            <div>
                {/* <button onClick={() => this.nextYear()} >{this.state.text}</button> */}
                <button onClick={this.nextYear} >{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {years} position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.CommitInputChanges(e, 'some color')} /*чтобы передать доп аргумент к этой функции, используем стрелочную фцию
                    и как аргумент передает событие, и при вызове функции уже внутри стрелочной перекидываем опять event как аргумент, а остальные аргументы
                    можем добавить на свое усмотрение, например строку*//>
                </form>
            </div>
        );
    } //Событие onChange и onInput работают в реакте одинако, обрабатывают событие после ввода текста
    //Лучше использовать первое

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

//!!!===!!! - НЕЛЬЗЯ использовать обычную функцию с обработчиками вызово,
//так как теряется контекст this и вместо данных конкретного экземпляра класса, мы получаем underfined