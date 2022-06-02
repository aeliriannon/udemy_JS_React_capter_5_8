import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data }) => {//числа в аттрибут пропсов записываются в фигурные скобки

    const elements = data.map(item => {
        // return (
        //     <EmployeesListItem name={item.name} salary={item.salary} />
        // );

        return (
            <EmployeesListItem {...item} />
        );
    });
    //Берем наши данные(массив объектов), которые приходят из пропсов
    //Берем метод map внутри которого item это отдельный элемент массива
    //И говорим чтобы он нам вернул html-элемент в котором item это элемент массива,
    //который содержит объект из двух свойств name и salary и мы достаем их значение
    //говорим что из текщего объекта item достань нам свойство mame -> item.name

    //во втором варианте используем object spread operator, он разворачивает нш объект сам
    //по сути идентично первому врианту, только запись короче

    return (//и передаем вместо компонента нашу переменную в фигурных скобкх
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;