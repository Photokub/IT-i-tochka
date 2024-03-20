import React from "react";
import './Logo.css';
import logo from "../../images/logo-IT-i-tochka.svg";
import { Link, animateScroll as scroll } from "react-scroll";

interface LogoPropTypes {
    handleCloseMenu: any,
    isHeaderPearent: boolean,
}

const Logo: React.FC<LogoPropTypes> = ({
    handleCloseMenu,
    isHeaderPearent
}) => {

function handleLogoParent(){
    !isHeaderPearent && handleCloseMenu()
}


    return (
        <div className="logo">
            <Link
                className="logo__link"
                to="main"
                spy={true}
                smooth={true}
                offset={-155}
                onClick={handleLogoParent}
            >
                <img src={logo} alt="логотип IT и точка" className="logo__image" />
            </Link>
            <p className="logo__title">ПРОГРАММИРУЕМ АНИМИРУЕМ ТЕСТИРУЕМ</p>
        </div>
    )
}

export default Logo;