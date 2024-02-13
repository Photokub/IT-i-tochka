import React from "react";
import MainImage from "../../images/pic_main.svg"
import "./Main.css"
import Button from "../Button/Button";

interface MainPtopTypes { }

const Main: React.FC<MainPtopTypes> = ({ }) => {
    return (
        <section className="main">
            <div className="main__wrap">
                <div className="main__container">
                    <h1 className="main__title">Программируй правильно с <span className="main__title main__highlight">«IT и точка»</span></h1>
                    <p className="main__paragraph" id="firstMainRow">Обучаем детей от 7 до 17 лет по методикам разработанными выпускниками и преподавателями из IT сферы.</p>
                    <label htmlFor="" className="main__buttonSection">
                        Запишись на бесплатное пробное занятие
                        <Button />
                    </label>
                    <p className="main__paragraph" id="thirdMainRow">Приведи друга и получи скидку на обучение!</p>
                    <h3 className="main__subtitle">Каждую неделю <span className="main__highlight">бесплатное пробное занятие</span> для будущих программистов</h3>
                    <img src={MainImage} alt="Иллюстрация" className="main__image" />
                </div>
            </div>
            <div className="main__backgroundImage"></div>
        </section>
    )
}

export default Main;