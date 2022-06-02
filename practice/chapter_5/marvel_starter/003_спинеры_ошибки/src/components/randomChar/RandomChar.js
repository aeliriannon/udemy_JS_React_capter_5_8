import { Component } from 'react/cjs/react.production.min';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();

    }

    state = {
        char: {},
        loading: true, //состояние, которое проверяет идет ли загрузка компонента
        //состояние загрузки в позиции тру
        error: false  //проверяем ответ с сервера на ошибку
    }

    marvelService = new MarvelService();
    onCharLoaded = (char) => {
        this.setState({ char, loading: false });
    }

    onError = () => { //функция для обработки ошибки
        this.setState({ loading: false, error: true }); /*Ставим loading в позицию фолс, так как если ошибка,
        то загрузка не произойдет, а error ставим в true*/
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError); //если пришла ошибка то выполняем функцию onError
    }

    render() {
        const { char, loading, error } = this.state;

        // if (loading) { /* Если loading true то есть идет загрузка,
        // то возвращаем компонент спиннер*/
        //     return <Spinner />
        // }
        const errorMessage = error ? <ErrorMessage /> : null;
        /*создаем переменную в которой будет лежать значение, которое зависит от условия
        если ошибка в состояии true то будем отображать компонент с ошибкой, если фолс, то 
        просто назначаем нул и ничего не отображаем*/
        const spinner = loading ? <Spinner /> : null; /*Создаем переменную для спинера,
        в которой тоже лежит состояние в зависимости от условия, если идет загрузка, 
        то вставляем компонент спинер, если нет, то задаем нул и ничего не отображаем*/
        const content = !(loading || error) ? <View char={char} /> : null; /*и третья переменна
        с условием, если нет ошибки или нет загрузки, то вставляем копонент вью, а если есть
        или ошибка или загрузка, то нул и ничего не отрисовываес*/
        return (
            <div className="randomchar">
                {/* {loading ? <Spinner /> : <View char={char} />} */}
                {/* Спршиваем загрузка идет? если идет, то загружаем компонент спинер,
                если нет, то загружаем компонент вью(наш непосредственно контент) */}
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
}

const View = ({ char }) => { //рендерящий компонент
    const { name, homepage, wiki, description, thumbnail } = char;

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;