import React from 'react';
import './ContactPrev.css';
import {Link} from 'react-router-dom'

const ContactPrev = (props) => {
    const route = `/ContactDetails/${props.contact._id}`
    return (
        <Link to={route}>
            <div>
                <li>
                    <div>
                        <img src={props.contact.picture}/>  
                    </div>
                    <div>
                       <div>{props.contact.name} </div>
                       <div>{props.contact.email}</div>
                       <div>{props.contact.phone}</div>
                    </div>   
                </li>
                </div>
            </Link>
    )
}

export default ContactPrev;