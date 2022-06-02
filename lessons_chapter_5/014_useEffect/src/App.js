import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';





const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log!')
    }
    /*useEffect объеденяет три хука жизненного цикл
    componentDidMount
    componentDidUpdate
    componentWillUnmount*/
    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`;

        window.addEventListener('click', logging); //при клике н окно браузера вызываем функцию logging
        //так как эта функция ссылается на слайдер, то при удалении слайдера должна удаляться и она

        return () => {
            window.removeEventListener('click', logging); //чтобы удалить, остановить подписку, то возвращаем просто функцию
            //в которой подписка удаляется
        }

    }, [slide]); //пинимает в себя колбэк функцию, 
    /*Функция запоминается и прикрепляется к данному компоненту, и отрабатывает,
    когда компонент полносью отрендарился на странице, и потом будет вызываться при каждом обновлении компонента
    В данном хуке выполняются все эффекты - таймаут, запрос на сервер, изменение дом-структуры
    -- второй аргумент - массив зависимостей, если зависимости не изменились, то эффект будет пропущен
    -- если оставить масси зависимостей пустым, то эффект отработает только один раз, при загрузке страницы и все
    При обновлении срабатывать больше не будет*/

    /*Подписка - это операции которые начинают работу и сами не остнавливаются, а их надо останвливать самим
    например таймаут*/

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }


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
    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(false)}>Click!</button>
            {slider ? <Slider /> : null}
        </>

    );
}

export default App;
