import './app.css';

// function WhoAmI(props) { //добавляем аргумент пропс - объект, который будет содержать информацию, которую мы ему передадим
//     return (
//         <div>
//             <h1>My name is {props.name}, surname - {props.surname}</h1>
//             <a href={props.link}>My profile</a>
//         </div>
//     );
// }

//Можно заменить н блее удбный код

function WhoAmI({ name, surname, link }) { //добавляем аргумент пропс - объект, который будет содержать информацию, которую мы ему передадим
    return (
        <div>
            <h1>My name is {name.firstName}, surname - {surname}</h1>
            <a href={link()}>My profile</a>
        </div>
    );
}


function App() {//как аттрибут пропса можно передавть все что угодно, функции. объекты, массивы
    //помним. что см объект вставить на страницу не сможем, только достать значене свойства какого-либо
    return (
        <div className="app">
            < WhoAmI name={{ firstName: 'John' }} surname='Smith' link={() => { return 'facebook.com' }} />
            < WhoAmI name={{ firstName: 'Ira' }} surname='Hlaz' link={() => { return 'vk.com' }} />
        </div>
    ); //такие аттрибуты неизменны, они годятся только для чтения, но без редактирования
} //как аттрибут вносим ключ объекта пропс будущий, а значение аргумента превртиться в свойство ключа 
// name='John' ==> {name: 'John'}

export default App;