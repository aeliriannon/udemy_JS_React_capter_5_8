import { useEffect, useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log!')
    }
    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`;

        window.addEventListener('click', logging); 
        
        return () => {
            window.removeEventListener('click', logging);
        }

    }, [slide]);
   
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    const getSomeImage = useCallback(() => {
        console.log('fetching');
        return [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/1024px-Gull_portrait_ca_usa.jpg',
            'https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg'
        ]
    }, [slide]) /*Первый аргумент функция, второй массив зависимостей*/

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }


    return (
        <Container>
            <div className="slider w-50 m-auto">  
                {/* {
                    getSomeImage().map((url, i) => {
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })
                } */}

                <Slide getSomeImage={getSomeImage}/>

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

const Slide = ({getSomeImage}) => { //передаем кк пропс в компонент функцию по добавлению картинок
    const [images, setImages] = useState([]); //устанвливем что у нас изначально пустой массив слайдеров

    useEffect(() => {
        setImages(getSomeImage()) //когда загрузился компонент , отправляем запрос на получение картинок, заполняем наш пустой массив
    }, [getSomeImage])/*И ставим как зависимость саму функцию запроса,
    говорим, что обновляем наш эффект, только если изменилась сама функция, например поменялись адреса запросов*/

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" /> )}
        </>
    );
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
