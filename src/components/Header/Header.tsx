import React from "react";
import './Header.css'
import logo from "../../images/logo-IT-i-tochka.svg"
import Button from "../Button/Button";
import { Link, animateScroll as scroll } from "react-scroll";

interface HeaderPropTypes {

}

const Header: React.FC<HeaderPropTypes> = ({ }) => {

    const scrollToTop: any = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="header">
            <div className="header__contacts">
                <div className="header__logo-container">
                    <img src={logo} alt="логотип IT и точка" className="header__logo" />
                    <p className="header__logo-title">ПРОГРАММИРУЕМ АНИМИРУЕМ ТЕСТИРУЕМ</p>
                </div>
                <div className="header__contacts-container">
                    <p className="header__contacts-title">+7 (963) 773-97-74</p>
                    <Button />
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-menu">
                    <Link
                        className="header__nav-link"
                        to="study"
                        spy={true}
                        smooth={true}
                        onClick={scrollToTop}
                    >
                        <li className="nav-menu-listItem">Чему мы обучаем</li>
                    </Link>
                    <Link
                        className="header__nav-link"
                        to="modules"
                        spy={true}
                        smooth={true}
                        onClick={scrollToTop}
                    >
                        <li className="nav-menu-listItem">Модули</li>
                    </Link>
                    <Link
                        className="header__nav-link"
                        to="classrooms"
                        spy={true}
                        smooth={true}
                        onClick={scrollToTop}
                    >
                        <li className="nav-menu-listItem">Наши классы</li>
                    </Link>
                    <Link
                        className="header__nav-link"
                        to="reviews"
                        spy={true}
                        smooth={true}
                        onClick={scrollToTop}
                    >
                        <li className="nav-menu-listItem">Отзывы</li>
                    </Link>
                    <Link
                        className="header__nav-link"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        onClick={scrollToTop}
                    >
                        <li className="nav-menu-listItem">Как нас найти</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header