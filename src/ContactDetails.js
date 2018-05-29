import React, { Component } from 'react';
import contactService from './service/ContactService';
import {Link} from 'react-router-dom';

class ContactDetails extends Component {
state = {
    contact: []
}

printProps() {
    console.log('id?????', this.props.match.params.id);
}

getContactById(){
    contactService.getContactById(this.props.match.params.id).then((contact) => {
        this.setState({contact})
        console.log(this.state.contact);
        
    })
}

componentDidMount() {
    this.printProps()
    this.getContactById()
}



render() {
    
    return(
            <div>
                <img src={this.state.contact.picture}/>
                <h1>Contact Details</h1>
                <h1>{this.state.contact.name}</h1>
                <h2>{this.state.contact.email}</h2>
                <h2>{this.state.contact.phone}</h2>
                <Link to={`/contact/edit/${this.props.match.params.id}`}><button>Edit</button></Link>    
            </div>
        )
    }
}

export default ContactDetails;