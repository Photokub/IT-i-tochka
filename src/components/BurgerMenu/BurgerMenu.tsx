import React, { useState } from "react";
import "./BurgerMenu.css"
import { Link, animateScroll as scroll } from "react-scroll";
import Navigation from "../Navigation/Navigation";
import ContactsBar from "../ContactsBar/ContactsBar";
import Logo from "../Logo/Logo";

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
                    <ContactsBar />
                </div>
                <span className='burger__substrate' />
            </div>
        </nav>
    )
}

export default BurgerMenu