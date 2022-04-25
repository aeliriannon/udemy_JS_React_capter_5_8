import React from "react";
import fitness from '../app_style_meal/assets/fitness.jpg';
import premium from '../app_style_meal/assets/premium.jpg';
import meatless from '../app_style_meal/assets/meatless.jpg';
import './app_cards_menu.css';


const AppCardsMenu = () => {

    return (
        <div className="menu">
            <h2 className="title">Наше меню на день</h2>

            <div className="menu__field">
                <div className="container">
                    <div className="menu__item">
                        <img src={fitness} alt="vegy" />
                        <h3 className="menu__item-subtitle">Меню "Фитнес"</h3>
                        <div className="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
                            овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
                            ценой и высоким качеством!</div>
                        <div className="menu__item-divider"></div>
                        <div className="menu__item-price">
                            <div className="menu__item-cost">Цена:</div>
                            <div className="menu__item-total"><span>229</span> грн/день</div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <img src={premium} alt="img/tabs/elite.jpg" />
                        <h3 className="menu__item-subtitle">Меню “Премиум”</h3>
                        <div className="menu__item-descr">В меню “Премиум” мы используем не только красивый дизайн упаковки, но
                            и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
                            в ресторан!</div>
                        <div className="menu__item-divider"></div>
                        <div className="menu__item-price">
                            <div className="menu__item-cost">Цена:</div>
                            <div className="menu__item-total"><span>550</span> грн/день</div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <img src={meatless} alt="post" />
                        <h3 className="menu__item-subtitle">Меню "Постное"</h3>
                        <div className="menu__item-descr">Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
                            продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
                            количество белков за счет тофу и импортных вегетарианских стейков. </div>
                        <div className="menu__item-divider"></div>
                        <div className="menu__item-price">
                            <div className="menu__item-cost">Цена:</div>
                            <div className="menu__item-total"><span>430</span> грн/день</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppCardsMenu;