import {useRef, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Form = () => {
    const[text, setText] = useState(''); //Создаем новое состояние, в котором изначально лежит пустая строка

    const myRef = useRef(1); /*Для создании ссылки просто прописываем хук как значение,
    Как начальное значение внутрь помещаем null так как изначально ссылка будет пустой
    У ссылки есть свойство current куда изначально и запишется null, а потом туда запишется 
    ссылка на нужный нам элемент - гuseRef это по сути объект*/

    useEffect(() => {
        //myRef.current++; //ref при изменении не перерендеривает страницу, а просто хранит в значении current изменения
        myRef.current = text; //храним в ссылке предыдущее состояние
    })
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={(e) => setText(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    
                    {/*навешиваем на инпут обработчик события,  при вводе текста винпут гоорим,
                    чтобы в наше состояние текст зписалось значение которое ввел пользователь  */}
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={myRef.current} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;