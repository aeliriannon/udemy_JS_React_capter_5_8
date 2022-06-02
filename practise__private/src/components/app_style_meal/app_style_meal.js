import React from "react";
import AppStyleMealsTabs from "../app_style_meal_tabs/app_style_meals_tabs";
import AppStyleMealContent from "../app_style_meals_content/app_style_meals_content";
import fitness from './assets/fitness.jpg';
import premium from './assets/premium.jpg';
import meatless from './assets/meatless.jpg';
import balanced from './assets/balanced.jpg';
import './app_style_meal.css';

const AppStyleMeal = () => {
    const tabsName = [
        {
            name: 'Фитнес',
            id: 1
        },
        {
            name: 'Премиум',
            id: 2
        },
        {
            name: 'Постное',
            id: 3
        },
        {
            name: 'Сбалансированное',
            id: 4
        }
    ];
    const tabsContent = [
        {
            imagePath: fitness,
            text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            id: 1
        },
        {
            imagePath: premium,
            text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            id: 2
        },
        {
            imagePath: meatless,
            text: 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!',
            id: 3
        },
        {
            imagePath: balanced,
            text: 'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.',
            id: 4
        }
    ]
    return (
        <div className="preview">
            <div className="bgc_blue"></div>
            <div className="container">
                <div className="tabcontainer">
                    <AppStyleMealContent dataContent={tabsContent} />
                    <div className="tabheader">
                        <h3>Выберите стиль питания</h3>
                        <AppStyleMealsTabs dataTabs={tabsName} />
                    </div>
                </div>
                <div className="preview__life">Живи полной жизнью!</div>
            </div>
        </div>
    );
}

export default AppStyleMeal;