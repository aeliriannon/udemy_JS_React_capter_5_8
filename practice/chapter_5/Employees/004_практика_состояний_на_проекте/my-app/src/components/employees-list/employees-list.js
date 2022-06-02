import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        //деструктуризация по остаточному принципу
        //мы все так же берем наш объект из item
        //и гворим что вытяни из него только свойство id, 
        //а остальные свойства объедини в одно itemProps

        //далее id вставляем как значение аттрибута key, а остальные свойства деструктуризируем как обычно
        //только используем не ...item? а  ...itemProps
        return (
            <EmployeesListItem key={id} {...itemProps} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;