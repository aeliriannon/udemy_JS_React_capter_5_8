import { Component } from "react/cjs/react.production.min";

import ErrorMessage from "../errorMessage/ErrorMessage";

/*componentDidCatch ловит только эти ошибки
    - ошибки в методе render
    - в методах жизненного цикла
    - и в конструкторах дочерних компонентов

    НЕ ловят
    - ошибки внутри обработчиков событий
    - асинхронный код
    - ошибки в самом предохранителе(ловит только в дочерних компонентх)
    - ошибки при серерном рендеринге
*/

class ErrorBoundary extends Component { //компонент который будет ловить ошибку
    state = {
        error: false //здесь будет только одно состояние, это ошибк
    }

    componentDidCatch(error, errorInfo) { //и вот тут уже ставим функцию, которая отлавливает ошибки
        this.setState({
            error: true //когда ошибка слоится, устанавливаем для нашего состояния позицию true
        })
    }

    render() {
        if(this.state.error) { //если ошибка в позиции тру, то рендерим запасной UI
            return <ErrorMessage /> //при ошибке выводим сообщение о ней
        }

        return this.props.children; //если же все будет хорошо, то сюда мы помещаем тот блок,
        //который и должен быть на странице
    }
}

export default ErrorBoundary