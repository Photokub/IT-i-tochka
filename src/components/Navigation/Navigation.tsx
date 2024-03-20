import React from "react";
import './Navigation.css';
import { Link, animateScroll as scroll } from "react-scroll";


interface NavigationPropTypes {
    isSubscribed: boolean,
    handleCloseMenu: any,
    windowSize: any,
}

const Navigation: React.FC<NavigationPropTypes> = ({ 
    isSubscribed,
    handleCloseMenu,
    windowSize,
}) => {

    const scrollToTop: any = () => {      //функция прокрутки наверх
        scroll.scrollToTop();
    };
    
    return (
        <nav className="nav">
            <ul className="nav__list">

                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="study"
                        spy={true}
                        smooth={true}
                        offset={-155}
                        onClick={handleCloseMenu}
                    >Чему мы обучаем</Link>
                </li>
                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="modules"
                        spy={true}
                        smooth={true}
                        offset={-155}
                        onClick={handleCloseMenu}
                    >Модули
                    </Link>
                </li>


                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="classrooms"
                        spy={true}
                        smooth={true}
                        offset={-155}
                        onClick={handleCloseMenu}
                    >Наши классы
                    </Link>
                </li>


                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="reviews"
                        spy={true}
                        smooth={true}
                        offset={-155}
                        onClick={handleCloseMenu}
                    >Отзывы
                    </Link></li>


                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="location"
                        spy={true}
                        smooth={true}
                        offset={-155}
                        onClick={handleCloseMenu}
                    >Как нас найти
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation