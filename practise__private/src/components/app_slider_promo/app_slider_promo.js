import React from "react";
import slide1 from './assets/pepper.jpg';
import slide2 from './assets/food-12.jpg';
import slide3 from './assets/olive-oil.jpg';
import slide4 from './assets/paprika.jpg';
import prev from './assets/left.svg';
import next from './assets/right.svg';
import './app_slider_promo.css';

const AppSliderPromo = () => {
    return (
        <div className="offer">
            <div className="bgc_y"></div>
            <div className="container">
                <div className="offer__text">
                    <h2 className="title">Что мы можем вам предложить?</h2>
                    <div className="offer__descr">
                        Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто
                        доставка, мы сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные,
                        но скучные аспекты. Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо
                        под дверь.
                    </div>
                </div>
                <div className="offer__action">
                    <button data-modal className="btn btn_dark">Связаться с нами</button>
                </div>
            </div>
            <div className="container">
                <div className="offer__advantages">
                    <h2>Быстро и полезно</h2>
                    <div className="offer__advantages-text">
                        Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты можешь
                        действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в качестве
                        продукта!
                    </div>
                    <h2>Правильный рацион</h2>
                    <div className="offer__advantages-text">
                        Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их
                        приготовления и дробления рациона.
                    </div>
                </div>
                <div className="offer__slider">
                    <div className="offer__slider-counter">
                        <div className="offer__slider-prev">
                            <img src={prev} alt="prev" />
                        </div>
                        <span id="current"></span>
                        /
                        <span id="total"></span>
                        <div className="offer__slider-next">
                            <img src={next} alt="next" />
                        </div>
                    </div>
                    <div className="offer__slider-wrapper">
                        <div className="offer__slider-inner">
                            <div className="offer__slide" data-1>
                                <img src={slide1} alt="pepper" />
                            </div>
                            <div className="offer__slide" data-2>
                                <img src={slide2} alt="food" />
                            </div>
                            <div className="offer__slide" data-3>
                                <img src={slide3} alt="oil" />
                            </div>
                            <div className="offer__slide" data-4>
                                <img src={slide4} alt="paprika" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppSliderPromo;