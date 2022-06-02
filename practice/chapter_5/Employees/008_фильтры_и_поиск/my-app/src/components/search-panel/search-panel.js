import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => { //передаем как аргумент объект события
        const term = e.target.value; //получаем значение, которое ввел пользователь
        this.setState({term}); //устанвливем новое состояние
        this.props.onUpdateSearch(term); //перекидываем значение на уровень верхних компонентов
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника" 
                value = {this.state.term}
                onChange = {this.onUpdateSearch}  />
        );
    }
}

export default SearchPanel;