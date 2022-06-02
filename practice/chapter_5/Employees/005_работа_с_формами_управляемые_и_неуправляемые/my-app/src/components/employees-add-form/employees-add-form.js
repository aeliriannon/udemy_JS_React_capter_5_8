import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => { //не нужен колбэк, так как нет зависимости от прошлого состояния
        this.setState({
            [e.target.name] : e.target.value //обращаемся к атрибуту name у инпутов
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name = 'name'
                        value = {name}
                        onChange = {this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name = 'salary'
                        value = {salary}
                        onChange = {this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;

/*
 Контролируемые управляемые компоненты, когда вводимое знчение пропускается через setState
 и только потом записывается в value

 Неуправляемые компоненты - это те, что храняться в DOM дереве, там где их ввел пользователь и все

 Единственный компонент, который всегда остается неуправляемым это компонент загрузки файлов
*/