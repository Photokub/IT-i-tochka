import React, { useState } from "react";
import "./BurgerMenu.css"
import { Link, animateScroll as scroll } from "react-scroll";
import Navigation from "../Navigation/Navigation";
import ContactsBar from "../ContactsBar/ContactsBar";
import Logo from "../Logo/Logo";

interface BurgerMunuPropTypes {
    windowSize: any,
    isSubscribed: boolean,
    handleCloseMenu: any,
    handleChangeBurger: any,
    isHeaderPearent: any
}

const BurgerMenu: React.FC<BurgerMunuPropTypes> = ({
    windowSize,
    isSubscribed,
    handleCloseMenu,
    handleChangeBurger,
    isHeaderPearent
}) => {

    const scrollToTop: any = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="burger">
            <div className='burger__container'>
                <input
                    className='burger__container__input'
                    type="checkbox"
                    checked={isSubscribed}
                    onChange={handleChangeBurger}
                />
                <span className='burger__container__stripe'></span>
                <span className='burger__container__stripe'></span>
                <span className='burger__container__stripe'></span>
                <div className='burger-menu-list'>
                    <Logo
                        handleCloseMenu={handleCloseMenu}
                        isHeaderPearent={isHeaderPearent}
                    />
                    <Navigation
                        isSubscribed={isSubscribed}
                        windowSize={windowSize}
                        handleCloseMenu={handleCloseMenu}
                    />
                    <ContactsBar />
                </div>
                <span className='burger__substrate' />
            </div>
        </nav>
    )
}

export default BurgerMenu