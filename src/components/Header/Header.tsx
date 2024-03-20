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
    isSubscribed: boolean,
    handleChangeBurger: any,
    handleCloseMenu: any;
    isHeaderPearent: boolean,
}

const Header: React.FC<HeaderPropTypes> = ({
    windowSize,
    isSubscribed,
    handleCloseMenu,
    handleChangeBurger,
    isHeaderPearent
}) => {

    const desktopMenu =
        <>
            <div className="header__contacts">
                <Logo
                    handleCloseMenu={handleCloseMenu}
                    isHeaderPearent={isHeaderPearent}
                />
                <ContactsBar />
            </div>
            <Navigation
                isSubscribed={isSubscribed}
                handleCloseMenu={handleCloseMenu}
                windowSize={windowSize}
            />
        </>


    return (
        <header className="header">
            {windowSize!.innerWidth! <= 984 ?
                <>
                    <Logo
                        handleCloseMenu={handleCloseMenu}
                        isHeaderPearent={isHeaderPearent}
                    />
                    <BurgerMenu
                        windowSize={windowSize}
                        isSubscribed={isSubscribed}
                        handleCloseMenu={handleCloseMenu}
                        handleChangeBurger={handleChangeBurger}
                        isHeaderPearent={isHeaderPearent}
                    />
                </>
                : desktopMenu
            }
        </header>
    )
}

export default Header