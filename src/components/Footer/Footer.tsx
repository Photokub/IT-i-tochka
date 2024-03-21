import React from "react";
import "./Footer.css"
import logo from "../../images/logo-IT-i-tochka.svg"
import { FaTelegram, FaVk, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import FooterLogo from "../FooterLogo/FooterLogo";

interface FooterPropTypes {

}

const Footer: React.FC<FooterPropTypes> = ({ }) => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <FooterLogo />
                <div className="footer__classes-block">
                    <h6 className="footer__title">Классы</h6>
                    <ul className="footer__contacts-list">
                        <li className="footer__contacts-listItem">JavaScript</li>
                        <li className="footer__contacts-listItem">Phiton</li>
                        <li className="footer__contacts-listItem">C#</li>
                    </ul>
                </div>
                <div className="footer__socials-block">
                    <h6 className="footer__title">Мы в соцсетях</h6>
                    <ul className="footer__contacts-list">
                        <li className="footer__contacts-listItem"><a className="footer__link" href="#"><FaTelegram className="footer__social-icon" /></a></li>
                        <li className="footer__contacts-listItem"><a className="footer__link" href="#"><FaVk className="footer__social-icon" /></a></li>
                    </ul>
                </div>
                <div className="footer__contacts-block">
                    <h6 className="footer__title">Контакты</h6>
                    <ul className="footer__contacts-list">
                        <li className="footer__contacts-listItem"><FaMapMarkerAlt className="footer__contacts-icon" /> г. Москва, ул. Поляны д. 1</li>
                        <li className="footer__contacts-listItem"><FaPhone className="footer__contacts-icon" /><a className="footer__link" href="+79637739774">+7 (963) 773-97-74</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__develop">
                <p className="footer__develop-paragraph">Дизайн и разработка <a className="footer__develop-link" href="http://photokub.ru">Александр Кубышкин©</a></p>
            </div>
        </footer>
    )
}

export default Footer;