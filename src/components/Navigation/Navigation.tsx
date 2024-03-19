import React from "react";
import './Navigation.css';
import { Link, animateScroll as scroll } from "react-scroll";


interface NavigationPropTypes {

}

const Navigation: React.FC<NavigationPropTypes> = ({ }) => {

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
                    >Чему мы обучаем</Link>
                </li>
                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="modules"
                        spy={true}
                        smooth={true}
                        offset={-155}
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
                    >Отзывы
                    </Link></li>


                <li className="nav__listItem">
                    <Link
                        className="nav__link"
                        to="location"
                        spy={true}
                        smooth={true}
                        offset={-155}
                    >Как нас найти
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation