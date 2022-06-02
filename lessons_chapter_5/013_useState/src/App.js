import { Component, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const calcValue = () => {
    console.log('random');

    return Math.random() * (50-1) + 1;
}

/*
Если передать эту функцию как аргумент к useState
const [slide, setSlide] = useState(calcValue); - то она вызовется один раз и все
Если нужно чтобы функция отработала только один раз, передала аргумент например, то можно ее
передать без вызова как в примере выше, либо использовать колбэк функцию, если нужно передать аргумент
const [slide, setSlide] = useState(() => calcValue(arg));


если же ее вызвать
const [slide, setSlide] = useState(calcValue()); - то она будет вызываться при каждом изменении стэйта
*/

const Slider = (props) => {
    // const slideStateArray = useState();
    /*useState возвращает нам массив где два аргумента, состояние и функ-ю, которая будет это состояние менять*/
    const [slide, setSlide] = useState(calcValue); //в useState передаем аргумент 0 - начальное значение для состояния
    /*Чтобы не обращаться к кждому аргументу, через массив и его индекс , используем деструктуризацию массива
    и вытягиваем сразу первый элемент -slide и второй эл-т - setSlide*/
    const [autoplay, setAutoplay] = useState(false);



    function changeSlide(i) {
        setSlide(slide => slide + i); //вставляем нашу функциюдля изменения состояния из useState
        //как аргумент передаем туда то как мы хотим изменить наше состояние
        //в данном случае мы говорим что мы к нашему состоянию будем прибавлять какое то число
        //если наше измененное состояние зависит от прошлого, то используем колбэк функцию
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    // const [state, setState] = useState({slide: 0, autoplay: false})



    // function changeSlide(i) {
    //     setState(state => ({...state, slide: state.slide + 1})); 
    //     //Если используем для всех состояний один объект, то при заменего какого то одного, остальные состояния надо переносить,
    //     //иначе они потеряются
    // }

    // function toggleAutoplay() {
    //     setState(state => ({...state, autoplay: !state.autoplay}));
    // }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br /> {/*вставляем наше состояние просто как элемент*/}
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                    >toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    return (
        <Slider />
    );
}

export default App;
