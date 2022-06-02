import { Component } from 'react';
import PropTypes  from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false, //состояние подгрузки новых элементов
        offset: 210, //начальный отступ
        charEnded: false //свойство, которое смотрит закончились ли персонажи
    }

    marvelService = new MarvelService();

    componentDidMount() {
        // this.marvelService.getAllCharacters()
        //     .then(this.onCharListLoaded)
        //     .catch(this.onError)
        //так как код здесь и в реквест похож и отличается тоько отступом, то 
        //чтобы избежать повторений кода просто здесь вызывем реквест без аргумента
        this.onRequest();
    } //здесь персонажи обновляются сразу как компонент появляется на странице

    onRequest = (offset) => { //а это функция, которая будет добавлять персонажей по клику на кнопку
        this.onCharListLoading();// вызывем наш метод загрузки
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }

        this.setState(({ offset, charList }) => ({
            charList: [...charList, ...newCharList], //берем старый массив персонажей и добавляем к нему новый массив персонажей
            loading: false,
            newItemLoading: false, //как страница загрузилась, то и этот процесс загрузки ставим в офлс
            offset: offset + 9, //как только произошла успешная подгрузка, мы наш отступ увеличиваем на 9 персонажей
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        const items = arr.map((item) => {
            let imgStyle = { 'objectFit': 'cover' };
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }

            return (
                <li
                    className="char__item"
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)} >
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {

        const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;

        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style = {{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;