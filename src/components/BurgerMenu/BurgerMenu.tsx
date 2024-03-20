import React, { useState } from "react";
import "./BurgerMenu.css"
import { Link, animateScroll as scroll } from "react-scroll";
import Navigation from "../Navigation/Navigation";
import ContactsBar from "../ContactsBar/ContactsBar";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
// import Contacts from "../Contacts/Contacts";

interface BurgerMunuPropTypes {
    windowSize: any;
}

const BurgerMenu: React.FC<BurgerMunuPropTypes> = ({
    windowSize
}) => {

    const burger = document.querySelector(".burger__container__input") as HTMLInputElement
    const page = document.body
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

    const handleChange = (event: any) => {
        if (event.target.checked) {
            page.style.overflowY = 'hidden'
        } else {
            page.style.overflowY = 'scroll'
        }
        setIsSubscribed(current => !current);
    };

    const closeMenu = () => {
        if (burger.checked) {
            page.style.overflowY = 'hidden'
            console.log(burger.checked)
        } else {
            page.style.overflowY = 'scroll'
            console.log(burger.checked)
        }
        setIsSubscribed(current => !current);
    }

    const scrollToTop: any = () => {
        scroll.scrollToTop();
    };

    const handleOnClick = () => {
        setTimeout(closeMenu, 200)
        scrollToTop()
    }

    return (
        <nav className="burger">
            <div className='burger__container'>
                <input
                    className='burger__container__input'
                    type="checkbox"
                    checked={isSubscribed}
                    onChange={handleChange}
                />
                <span className='burger__container__stripe'></span>
                <span className='burger__container__stripe'></span>
                <span className='burger__container__stripe'></span>
                <div className='burger-menu-list'>
                    <Logo/>
                    <Navigation />
                </div>
                {/* <ul className='burger-menu-list'>
                    <li className='burger-menu-list__string'>
                        <Logo />
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className='burger-menu__list-navlink'
                            to="about"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                        >Чему мы обучаем</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="solutions"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                        >Модули
                        </Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="methods"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                        >Наши классы</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="ad"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                        >Подать заявку</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="reviews"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                        >Отзывы</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="feedback"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                        >Как нас найти</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        +7 (963) 773-97-74
                    </li>
                    <li className='burger-menu-list__string'>
                        <Button />
                    </li>
                </ul> */}
                <span className='burger__substrate' />
            </div>
        </nav>
    )
}

export default BurgerMenu