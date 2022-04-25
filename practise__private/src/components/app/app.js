import React from 'react';
import AppHeader from '../app_header/app_header';
import AppSliderPromo from '../app_slider_promo/app_slider_promo';
import AppStyleMeal from '../app_style_meal/app_style_meal';
import AppCalculatorCalories from '../app_calсulator_calorie/app_calculator_calorie';
import AppCardsMenu from '../app_cards_menu/app_cards_menu';
import AppFormsFeedback from '../app_forms_feedback/app_forms_feedback';
import AppTimerSale from '../app_timer_sale/app_timer_sale';
import AppFooter from '../app_footer/app_footer';
import AppModalForms from '../app_modal_forms/app_modal_forms';

import './app.css';




function App() {
    return (
        <div>
            <AppHeader />,
            <AppStyleMeal />,
            <div class="divider"></div>,
            <AppSliderPromo />,
            <div class="divider"></div>,
            <AppCalculatorCalories />,
            <div class="divider"></div>,
            <AppCardsMenu />,
            <AppFormsFeedback />,
            <div class="divider"></div>,
            <AppTimerSale />,
            <AppFooter />,
            <AppModalForms />
        </div>

    );
}

export default App;