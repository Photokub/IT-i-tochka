import React from "react";
import './Header.css'
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

interface HeaderPropTypes {

}

const Header: React.FC<HeaderPropTypes> = ({ }) => {

    return (
        <header className="header">
            <div className="header__contacts">
                <Logo />
                <div className="header__contacts-container">
                    <p className="header__contacts-title">+7 (963) 773-97-74</p>
                    <Button />
                </div>
            </div>
            <Navigation/>
        </header>
    )
}

export default Header