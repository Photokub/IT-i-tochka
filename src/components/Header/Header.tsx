import React from "react";
import './Header.css'
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ContactsBar from "../ContactsBar/ContactsBar";

interface HeaderPropTypes {
    windowSize?: {
        innerWidth?: number,
    },
}

const Header: React.FC<HeaderPropTypes> = ({
    windowSize
}) => {

    const desktopMenu =
        <>
            <div className="header__contacts">
                <Logo />
                <ContactsBar />
            </div>
            <Navigation />
        </>


    return (
        <header className="header">
            {windowSize!.innerWidth! <= 984 ?
                <>
                    <Logo />
                    <BurgerMenu
                        windowSize={windowSize}
                    />
                </>
                : desktopMenu
            }
        </header>
    )
}

export default Header