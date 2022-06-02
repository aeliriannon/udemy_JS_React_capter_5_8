import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component { //деструктуризация - объект пропс сразу разрезаем на свойства
    constructor(props) { /*Создаем конструктор, куда передаем наши пропсы*/
        super(props);/*Дальше в метод супер передаем наши пропсы*/
        this.state = { /*и создаем объект, который будет содержать наши состояния */
            increase: false, /*Задаем для инкриз значение фолс*/
            rise: false
        }
    }

    onIncrease = () => { //создаем метод повышения зарплаты
        this.setState(({ increase }) => ({//колбэк функция принимает один аргумень - это state то состояние которое задано у нас изначально
            //чтобы не писать каждый раз this.state мы используем просто деструктуризацию ({increase}) 
            //и далее тело функции мы берем в круглые скобки, чтобы не прописывать return а данные нам вернулись
            increase: !increase //внутри устанавливаем новое свойство increase которое противоположно тому значению, которое было раньше
        })) //создаем функцию изменения нашего increase, поскольку будущее состояние зависит от предыдущего, 
        //то использем колбэк функцию
    }

    onRise = () => {
        this.setState(({ rise }) => ({
            rise: !rise
        }))
    }

    render() {
        const { name, salary } = this.props;/*вытаскиваем из пропсов наши переменные с помощью деструктуризации*/
        const { increase, rise } = this.state; /*достаем наш инкриз не из пропсов,  из стэйта*/

        let classNames = 'list-group-item d-flex justify-content-between';

        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like'
        }
        //в блоке версте навешиваем на кнопку обработчик клика и передаем туда метод, который повысит зарплату сотруднику
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;