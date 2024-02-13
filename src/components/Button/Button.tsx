import React from "react";
import "./Button.css"

interface ButtonPropTypes{

}

const Button:React.FC<ButtonPropTypes> = ({}) => {
    return(
        <button className="button" type="button">
            Записаться на пробный урок
        </button>
    )
}

export default Button;