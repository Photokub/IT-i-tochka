import React from "react";
import { RiMapPin2Fill, RiPhoneFill } from "react-icons/ri"
import "./Location.css"

interface LocationPropTypes { }

const Location: React.FC = ({ }) => {
    return (
        <section className="location">
            <div className="location__wrap">
                <h2 className="location__title">Как нас найти:</h2>
                <div className="location__container">
                    <div className="location__contacts">
                        <h6 className="location__contactsTitle">Мы работаем круглый год, даже летом!</h6>
                        <ul className="location__contactsList">
                            <li className="location__contactsListItem">
                                <h6 className="location__contactsTitle">Адрес:</h6>
                                <p className="location__contacts__paragraph"><RiMapPin2Fill className="location__icon" />Москва, ул. Поляны, дом 5 (Эталон Сити)</p>
                            </li>
                            <li className="location__contactsListItem">
                                <h6 className="location__contactsTitle">Телефон</h6>
                                <p className="location__contacts__paragraph"><RiPhoneFill className="location__icon" />+7 (963) 773-97-74</p>
                            </li>
                        </ul>
                    </div>
                    <div className="location__map">
                        <iframe className="location__iframe" src="https://yandex.ru/map-widget/v1/?ll=37.555422%2C55.557671&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNzE4MTIyNzQwEjbQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0YPQu9C40YbQsCDQn9C-0LvRj9C90YssIDUiCg1YOBZCFSc7XkI%2C&z=17.61"
                        allowFullScreen={true}></iframe></div>
                </div>
            </div>
        </section>
    )
}

export default Location