import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: true, rise: true, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2 },
                { name: 'Carl y.', salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: '', //сюда будет передаваться строка поиска
            filter: 'all' //сюда будет передаваться фильтр
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    serchEmp = (items, term) => { //передаем два аргумента - массив в котором ищем + строка по которой ищем 
        if (term.length === 0) { //проверяем длину строки, которую ввел пользователь
            return items; //возвращаем все пункты
        }

        return items.filter(item => {//формруем новый массив, который совпадает с запросом в поиске
            return item.name.indexOf(term) > -1; /*используем индекс оф и проверяем подстроку(если подстрока не совпадает то метод возвращает -1)
            поэтому мы возвращаем те элементы, которые больше, чем -1, то есть совпадают с введенным текстом*/
        })
    }
    onUpdateSearch = (term) => {
        this.setState({ term }); //term: term тоже самое что просто term
    }

    filterPost = (items, filter) => { //метод обработки фильтров, принимает в себя массив и выбранный фильтр
        switch(filter) { //используем свитч , чтобы сделать действие в зависимости от выбраного фильтра
            case 'rise': //если нам нужны сотрудники со звездочкой, которые идут на повышение
            return items.filter(item => item.rise); //формируем массив из тех сотрудников у кого rise в позиции true
            case 'moreThen1000': 
                return items.filter(item => item.salary > 1000); //оставляем сотрудников у кого зарплат больше 1000
            default:
                return items; //если ни одно условие не выбрано, то выводим просто весь список
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        // const visibleData = this.serchEmp(data, term); //создаем переменную, в которую будет приходить новый отфильтрованный массив
       const visibleData = this.filterPost(this.serchEmp(data, term), filter);//таким образом проходит двойная фильтрация
       //первая п поиску а потом из оставшегося массива по фильтру
       
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect = {this.onFilterSelect} />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;

/*
Подъем состояния, это когда мы берем состояние какого-то компонента внутреннего 
и поднимаем его до уровня верхних компонентов
*/