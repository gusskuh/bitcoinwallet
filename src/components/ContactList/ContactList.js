import React from 'react';
import ContactPrev from '../ContactPrev/ContactPrev';

const ContactList = (props) => {
    const renderContacts = () => {
        return (
        <ul>
            {props.contacts.map((contact, i) => {
                return (<ContactPrev key={i} contact={contact}/>)
            })}
        </ul>    
        );
    };

    return (
        <div>
            
            {renderContacts()}
        </div>
    );
 }
 
 export default ContactList;