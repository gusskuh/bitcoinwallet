import React, { Component } from 'react';
import contactService from './service/ContactService';
import ContactList from './components/ContactList/ContactList'; 
import FilterContacts from './components/FilterContacts/FilterContacts';
import {Link} from 'react-router-dom';

class ContactPage extends Component {

 
   state = {
        contacts: []
    }

    componentDidMount() {
      console.log('componentDidMount');
      contactService.getContacts().then((contacts)=> {
        this.setState({contacts: contacts})
      })
    }

    updateContactsState = (input) => {
      contactService.getContacts({term: input.target.value}).then((contacts) => {
        this.setState({contacts: contacts})
      })
      console.log('kiki', input.target.value );
    }

   

  

  render() {
   
    return (
      <div>
        <FilterContacts search={this.updateContactsState} />
        <ContactList contacts={this.state.contacts} />
        <Link to={`/contact/edit/`}><button>Add Contact</button></Link>
      </div>
    );
  }
}

export default ContactPage;

  
