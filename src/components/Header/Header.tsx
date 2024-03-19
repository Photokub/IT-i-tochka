import React from "react";
import './Header.css'
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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
                <div className="header__contacts-container">
                    <p className="header__contacts-title">+7 (963) 773-97-74</p>
                    <Button />
                </div>
            </div>
            <Navigation />
        </>


    return (
        <header className="header">
            {windowSize!.innerWidth! <= 984 ?
                <BurgerMenu
                    windowSize={windowSize}
                />
                : desktopMenu
            }
        </header>
    )
}

export default Header