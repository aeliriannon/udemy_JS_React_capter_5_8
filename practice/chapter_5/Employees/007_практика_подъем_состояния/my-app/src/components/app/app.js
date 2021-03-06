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
            ]
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
    // onToggleIncrease = (id) => {
    //     //  this.setState(({data}) => {
    //     //      const index = data.findIndex(elem => elem.id === id );

    //     //      const old = data[index];
    //     //      const newItem = {...old, increase: !old.increase};/*Берем старый объект и разворачиваем его в новом, 
    //     //      то есть создаем новый объект на основе старого, а все что через запятую дальше пишется, то добавляется в новый этот объект,
    //     //      а если такое свойство уже существует, то оно просто меняется на то что записано последним*/
    //     //      const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

    //     //      return {
    //     //          data: newArr
    //     //      }
    //     //  })
    // this.setState(({data}) => ({
    //     data: data.map(item => {
    //         if(item.id === id) {
    //             return {...item, increase: !item.increase}
    //         }
    //         return item;
    //     })
    // }))

    // }
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

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
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