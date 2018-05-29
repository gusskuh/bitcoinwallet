import React, { Component } from 'react';
import contactService from './service/ContactService';

class ContactEdit extends Component {
    state = {
        contact: {
            name:'',
            email:'',
            phone:'',
    },
    }
    
    getContactById(){
        contactService.getContactById(this.props.match.params.id).then((contact) => {
            this.setState({contact})
            console.log(this.state.contact);
            
        })
    }
    
    componentDidMount() {
        if(this.props.match.params.id) this.getContactById(); 
    }

    updateName(e) {
        let val = e.target.value;
        let newContact = {}
        this.setState({[this.state.contact.name]: val})

    }
    
    
    
    render() {
        
        return(
            <div>
                <form action="" >
                   <div> Name:  <input  type="text"  value={this.state.contact.name}/></div>
                   <div> eMail: <input  type="text" value={this.state.contact.email} /></div>
                   <div> Phone: <input  type="text" value={this.state.contact.phone} /></div>
                    <button>Save!</button>
                </form>
            </div>
            )
        }
    }
    
    
export default ContactEdit;