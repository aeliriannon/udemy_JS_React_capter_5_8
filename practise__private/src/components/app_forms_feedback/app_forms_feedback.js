import React from "react";
import arrow from '../app_slider_promo/assets/right.svg';
import './app_forms_feedback.css';

const AppFormsFeedback = () => {    
    return (
        <div className="order">
            <div className="container">
                <div className="title">Заказывай пробный день прямо сейчас!</div>
                <form action="#" className="order__form">
                    <input required placeholder="Ваше имя" name="name" type="text" class="order__input" />
                    <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="order__input" />
                    <img src={arrow} alt="right" />
                    <button className="btn btn_dark btn_min">Перезвонить мне</button>
                </form>
            </div>
        </div>
    );
}

export default AppFormsFeedback;