import React from "react";
import './ClassCard.css';
// import image from "../../images/test.jpg"

interface ClassCardPropTypes {
    key: number,
    imageSrc: string,
    alt: string,
    title: string,
}

const ClassCard: React.FC<ClassCardPropTypes> = ({ imageSrc, alt, title }) => {
const image = imageSrc

    return (
        <div className="classCard">
            <img className="cardClass__image" src={imageSrc} alt={alt} />
            <h5 className="classCard__title">{title}</h5>
        </div>
    )
}
export default ClassCard;