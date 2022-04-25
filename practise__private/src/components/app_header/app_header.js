import React from "react";
import AppHeaderLogo from "./app_header_logo";
import AppHeaderNavigation from "./app_header_navigation";
import './app_header.css';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__left-block">
                <AppHeaderLogo />
                <AppHeaderNavigation />
            </div>
            <div className="header__right-block">
                <button data-modal className="btn btn_white">Связаться с нами</button>
            </div>
        </header>
    );
}

export default AppHeader;