import React from "react";
import {RiMapPin2Fill, RiPhoneFill} from "react-icons/ri"
import "./Location.css"

interface LocationPropTypes { }

const Location: React.FC = ({ }) => {
    return (
        <section className="location">
            <div className="location__wrap">
                <h2 className="location__title">Как нас найти:</h2>
                <div className="location__contacts">
                    <h6 className="location__contactsTitle">Мы работаем круглый год, даже летом!</h6>
                    <ul className="location__contactsList">
                        <li className="location__contactsListItem">
                            <h6 className="location__contactsTitle">Адрес:</h6>
                            <p className="location__contacts__paragraph"><RiMapPin2Fill className="location__icon"/>Москва, ул. Поляны, дом 5 (Эталон Сити)</p>
                        </li>
                        <li className="location__contactsListItem">
                            <h6 className="location__contactsTitle">Телефон</h6>
                            <p className="location__contacts__paragraph"><RiPhoneFill className="location__icon"/>+7 (963) 773-97-74</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Location