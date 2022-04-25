import React from 'react';
import logo from './assets/veg.svg';

import './app_footer.css';

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    <div className="subtitle">Мы в социальных сетях:</div>
                    <a href="." className="link">instagram</a>
                    <a href="." className="link">facebook</a>
                </div>
                <div className="pepper">
                    <img src={logo} alt="pepper" />
                </div>
                <div className="call">
                    <div className="subtitle">Или позвоните нам</div>
                    <a href="." className="link">+380678341034</a>
                    <a href="." className="link">+380500941356</a>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;