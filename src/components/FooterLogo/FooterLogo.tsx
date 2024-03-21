import React from "react";
import './FooterLogo.css'
import logo from "../../images/logo-IT-i-tochka.svg"

interface FooterLogoPropTypes {

}

const FooterLogo: React.FC<FooterLogoPropTypes> = ({ }) => {
    return (
        <figure className="footer-logo">
            <img src={logo} alt="логотип" className="footer-logo__image" />
            <figcaption className="footer-logo__title">программирование для детей</figcaption>
        </figure>
    )
}

export default FooterLogo