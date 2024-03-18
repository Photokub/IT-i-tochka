import React from "react";
import './Header.css'
import logo from "../../images/logo-IT-i-tochka.svg"
import Button from "../Button/Button";

interface HeaderPropTypes {

}

const Header: React.FC<HeaderPropTypes> = ({ }) => {
    return (
        <header className="header">
            <div className="header__contacts">
                <div className="header__logo-container">
                    <img src={logo} alt="логотип IT и точка" className="header__logo" />
                    <p className="header__logo-title">ПРОГРАММИРУЕМ АНИМИРУЕМ ТЕСТИРУЕМ</p>
                </div>
                <div className="header__contacts-container">
                    <p className="header__contacts">+7 (963) 773-97-74</p>
                    <Button />
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-menu">
                    <li className="nav-menu-listItem">Чему мы обучаем</li>
                    <li className="nav-menu-listItem">Модули</li>
                    <li className="nav-menu-listItem">Наши классы</li>
                    <li className="nav-menu-listItem">Отзывы</li>
                    <li className="nav-menu-listItem">Как нас найти</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header