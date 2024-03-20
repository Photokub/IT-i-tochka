import React from "react";
import './ContactsBar.css'
import Button from "../Button/Button";

interface ContactsBarPropTypes {

}

const ContactsBar: React.FC<ContactsBarPropTypes> = ({ }) => {
    return (
        <div className="contacts-bar">
            <p className="contacts-bar__title">+7 (963) 773-97-74</p>
            <Button />
        </div>
    )
}

export default ContactsBar