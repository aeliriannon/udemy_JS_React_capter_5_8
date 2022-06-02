import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './app.css';

class Form extends Component {
    // myRef = React.createRef(); //создаем ссылку с помошью метода createRef
   
    // //ref всегда назначается перед componentDidMount или перед ComponentDidUpdate

    // // componentDidMount() {
    // //     this.myRef.current.focus();
    // //     //ссылка на элемент всегда храниться в специальном свойстве cuurent не забывать про это!
    // // }

    setInputRef = (elem) => {
        this.myRef = elem; //функция передает какой то элемент и вешает на него ссылку
    }

    focusFirstTI = () => {
        if(this.myRef) {
            this.myRef.focus();
            //если использовать вот такой прием(колбэк рефа) то current не нужен
        }
        
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    {/*теперь ссылка myRef ведет к элементу штзге в dom дереве
                    
                    нельзя навешивать ссылку на функциональный компонент, можно
                    либо на классовый либо на сам элемент*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
