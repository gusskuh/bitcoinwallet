import React, { Component } from 'react';
import ContactService from './service/ContactService';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact, getContactById } from './store/actions';
import { isNull } from 'util';
import swal from 'sweetalert';

class ContactEdit extends Component {
    state = {
        contact: {
            name:'',
            email:'',
            phone:'',
            moves:[],
       },
    }
    
    getContactById(){

       const callback = (contact) => {
            this.setState({contact})
        }
        this.props.getContactById(this.props.match.params.id, callback)
    }
    
    componentDidMount() {
        if(this.props.match.params.id) this.getContactById(); 
    }

    updateContact = (e) => {
        
        let val = e.target.value;
        let contact = Object.assign(this.state.contact, {[e.target.name]: e.target.value})
        this.setState({contact})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const callback = () => {
            swal("Good job!", `Contact has been saved!`, "success");
            this.props.history.push('/contactPage');
        }
        this.props.addContact(this.state.contact, callback)
    }
    
    
    render() {
        const contact = this.state.contact
        return(   
        <div className="form-style-8">
                <form onSubmit={this.handleSubmit}>
                    <div> Name: <input type="text" name="name" placeholder="Full Name" value={contact.name} onInput={this.updateContact}/> </div>
                    <div> eMail: <input type="email" name="email" placeholder="Email"  value={contact.email} onInput={this.updateContact}/> </div>
                    <div> Phone: <input type="number" name="phone" placeholder="phone" value={contact.phone} onInput={this.updateContact}/> </div>
                    <button>Save!</button>
                </form>
        </div>
            )
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({
             addContact,
             getContactById,
          }, dispatch)
        }

       
    

export default connect(null, mapDispatchToProps)(ContactEdit);