import React from "react";
import logo from './assets/logo.svg';

const AppHeaderLogo = () => {
    return (
        <div className="header__logo">
            <img src={logo} alt="Логотип" />
        </div>

    );
}

export default AppHeaderLogo