import { useEffect, useState, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


const countTotal = (num) => {
    console.log('counting...');
    return num + 1;
}

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
    }, [slide]) 

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    const total = useMemo(() => { //Хук запоминает значение, которое возврщается(как аргумент колбэкфнкция, которая и возвращает нужное значение)
        return countTotal(slide);
    }, [slide]); //второй аргумент опять же зависимость, если измениться slide то и значение измениться
    //в остальных случаях ничего меняться не будет
    //как и в колбэк хуке если зависимость оставить пустой, то значение посчитается один раз при загрузке и все, 
    //больше меняться не будет
    //useCallback запоминает саму функцию, useMemo запоминает значение возвращенное функцией
    //в useMemo нельзя помещать запросы и подписки

    // const style = {
    //     color: slide > 4 ? 'red' : 'black'
    // } //так как код идет сверху вниз, то при рендере страницы формируется этот объект,
    // //и когда идет сравнение этого нового объекта с объектом который ниже отслеживает useMemo то они будут разные, так кк это два разных объекта
    // //и получается что при клике на любую область , будет срабатывать useMemo несмотря на то что style мы не трогаем

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide]);

    useEffect(() => {
        console.log('styles!')
    }, [style]); /*Когда у нс будет изменение стилей, то выводим в консоль сообщение*/


    return (
        <Container>
            <div className="slider w-50 m-auto"> 

                <Slide getSomeImage={getSomeImage}/>

                <div className="text-center mt-5">Active slide {slide} <br /> {autoplay ? 'auto' : null}</div>

                <div style={style} className="text-center mt-5">Total slides: {total}</div>

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

const Slide = ({getSomeImage}) => { 
    const [images, setImages] = useState([]); 

    useEffect(() => {
        setImages(getSomeImage()) 
    }, [getSomeImage])

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
