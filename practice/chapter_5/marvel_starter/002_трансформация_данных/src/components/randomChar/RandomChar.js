import { Component } from 'react/cjs/react.production.min';
import MarvelService from '../../services/MarvelService'

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    constructor(props) {
        super(props);
        // Вызывать компоненты с изменяемым setState нельзя в конструкторе до того как запустилось приложение
        this.updateChar(); //говорим, чтобы наш объект формировался при создании нашего компонента
    }

    state = { //создаем объект содержащий состояния, все состояния в значении null так как при загрузке они будут неизвестны
        //     name: null,  //имя персонажа
        //     description: null, //описание персонажа
        //     thumbnail: null, //превьюшка для персонажа
        //     homepage: null, //сылка на страницу персонажа
        //     wiki: null //ссылка на вики по персонажу
        char: {} //в стейте оставляем пустой объект для персонажа, чтобы данные любого типа можно было записать
    }

    marvelService = new MarvelService(); //создаем новое свойство внутри класса, теперь тут будет существовать новое свойство this.marvelServices

    onChatLoaded = (char) => {
        this.setState({ char });
    }

    //создаем метод, который будет делать запрос на сервер и менять стейт нашего персонажа в зависимости от полученых данных
    updateChar = () => {
        //берем рандомное число, умножаем на разность между макс нужным значение и минимальным нужным значением , потом прибавляем минимальное знчение и округляем до целого
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000); //данная содержащая уникальный id персонажа
        this.marvelService // обращаемся к новому свойству класса,
            .getCharacter(id)//к его методу получения одного персонажа
            .then(//res => { //когда ответ с сервера получен, обрабатываем результат
                //     this.setState (res); //передаем в смену состояния наш новый объект
                // }
                this.onChatLoaded)
    }

    render() {
        //достаем с помощью деструктуризации наши переменные состояний
        const { char: { name, description, thumbnail, homepage, wiki } } = this.state;

        return (
            <div className="randomchar">
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

export default RandomChar;