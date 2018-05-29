import React from 'react';
import './ContactPrev.css';
import {Link} from 'react-router-dom'

const ContactPrev = (props) => {
    const route = `/ContactDetails/${props.contact._id}`
    return (
        <div>
            <Link to={route}>
                <li>
                    <div>
                        <img src={props.contact.picture}/>  
                    </div>
                    <div>
                        <p>{props.contact.name}</p>
                        <p>{props.contact.email}</p>
                        <p>{props.contact.phone}</p>
                    </div>   
                </li>
            </Link>
        </div>
        
    )
}

export default ContactPrev;