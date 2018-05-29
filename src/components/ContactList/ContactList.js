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
            <h1>Contact List</h1>
            {renderContacts()}
        </div>
    );
 }
 
 export default ContactList;