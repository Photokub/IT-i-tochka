import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import "./Classes.css"
import ClassCard from "../ClassCard/ClassCard";

interface ClassesPropTypes {
    ClassesListArray: { id: number; name: string; image: string; }[]
}



const Classes: React.FC<ClassesPropTypes> = ({ ClassesListArray }) => {

    return (
        <section className="classes">
            <div className="classes__wrap">
                <h2 className="classes__title">Чему мы обучаем:</h2>
                <div className="classes__container">

                    {ClassesListArray.map((item: any, index: number) => (
                        <ClassCard
                            key={index}
                            imageSrc={item.image}
                            alt={item.name}
                            title={item.name}
                        />
                    ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Classes; 