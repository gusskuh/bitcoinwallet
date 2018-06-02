import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import contactService from './service/ContactService';
import ContactList from './components/ContactList/ContactList'; 
import MovesList from './components/MovesList/MovesList'; 
import FilterContacts from './components/FilterContacts/FilterContacts';
import {Link} from 'react-router-dom';
import { loadContacts } from './store/actions';



class ContactPage extends Component {
 
  render() {
   const { user, contacts } = this.props;
    return (
      <div>
        <h1>Your Transactions</h1>
        <MovesList user={user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
       loadContacts
    }, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

  
