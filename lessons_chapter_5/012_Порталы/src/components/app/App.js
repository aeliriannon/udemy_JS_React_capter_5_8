import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import './app.css';

class Form extends Component {
    state = {
        advOpen: false
    }

    handleClick = () => {
        //console.log('click')
        this.setState(({advOpen}) => ({
            advOpen: !advOpen
        }))
    } //клик будет срабатывать и на компоненте msg хотя в доме он за границей орме, но в реакте он в компоненте form, 
    //поэтому и срабатывает

    render() {
        return (
            <Container>
                <form onClick = {this.handleClick} className="w-50 border mt-5 p-3 m-auto"
                    style={{
                        'overflow': 'hidden',
                        'position': 'relative'
                    }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.advOpen ?
                        <Portal>
                            <Msg />
                        </Portal> : null
                    } {/*если advOpen в позиции тру, то добавляем элемент Msg, если нет то неичего не добавляем*/}
                    {/* <Portal> {/*Помещаем наш портал в компонент и в него помещаем наше сообщение*/}
                       {/*} <Msg />
                    </Portal> */}
                </form>
            </Container>
        )
    }
}

const Portal =  (props) => { //конструкция для создания порталов
    //порталы нужны для того, чтобы эл-т, который находится в этом компоненте,
    //можно было перенести в другой
    const node = document.createElement('div');
    document.body.appendChild(node); //создаем на странице контейнер, в который будем помещать наш дочерний элемент

    return ReactDOM.createPortal(props.children, node);
    //принимает два аргумента - 1 - ребенок, 2 - контейнер куда его хотим переместить
}

const Msg = () => {
    return (
        <div
            style={{
                'width': '500px',
                'height': '150px',
                'backgroundColor': 'red',
                'position': 'absolute',
                'right': '0',
                'bottom': '0'
            }}>
            Hello
        </div>
    )
}

function App() {
    return (
        <Form />
    );
}

export default App;
