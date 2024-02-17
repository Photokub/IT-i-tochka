import React from "react";
import "./Classes.css"

interface ClassesPropTypes {

}

const Classes: React.FC<ClassesPropTypes> = ({ }) => {
    return (
        <section className="classes">
            <h2 className="classes__title">Чему мы обучаем:</h2>
            <div className="classes__container">
                
            </div>
        </section>
    )
}

export default Classes; 