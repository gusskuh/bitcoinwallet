import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import contactService from "./service/ContactService";
import ContactList from "./components/ContactList/ContactList";
import FilterContacts from "./components/FilterContacts/FilterContacts";
import { Link } from "react-router-dom";
import { loadContacts } from "./store/actions";

class ContactPage extends Component {
  componentDidMount() {
    this.props.loadContacts();
  }

  updateContactsState = input => {
    this.props.loadContacts({ term: input.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <h1>ContactL List</h1>
          <FilterContacts search={this.updateContactsState} />
          <Link to={`/contact/edit/`}>
            <button>Add Contact</button>
          </Link>
          <ContactList contacts={this.props.contacts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactsReducer.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadContacts
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
