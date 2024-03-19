import React from "react";
import './Logo.css';
import logo from "../../images/logo-IT-i-tochka.svg";
import { Link, animateScroll as scroll } from "react-scroll";


interface LogoPropTypes{

}

const Logo: React.FC<LogoPropTypes> =({})=>{
    return(
        <div className="logo">
        <Link
            className="logo__link"
            to="main"
            spy={true}
            smooth={true}
            offset={-155}
        >
            <img src={logo} alt="логотип IT и точка" className="logo__image" />
        </Link>
        <p className="logo__title">ПРОГРАММИРУЕМ АНИМИРУЕМ ТЕСТИРУЕМ</p>
    </div>
    )
}

export default Logo;