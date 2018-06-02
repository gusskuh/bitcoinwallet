import * as types from './types';
import ContactService from '../service/ContactService'
import UserService from '../service/UserService'

export function getContactById(id, callback) {
    return () => ContactService.getContactById(id).then((contact) => {
            callback(contact)
        })
}

export function addContact(newContact, callback) {
    return (dispatch) => {
        ContactService.saveContact(newContact).then(contacts => {

            dispatch({
                type: types.ADD_CONTACT,
                payload: contacts,
            })
            callback();
        })
    }
}

export function uploadSuccess() {
    return {
        type: types.LOAD_CONTACTS,
        payload: true,
    };
}

export function loadContacts(filterBy) {
    return (dispatch) => {
        ContactService.getContacts(filterBy).then(contacts => {
            dispatch({
                type: types.LOAD_CONTACTS,
                payload: contacts,
            })
        }) 
    }
}

export function signUp(userToLogin){
    UserService.saveUser(userToLogin);
    return ({type:types.LOGIN_USER, payload:userToLogin})
}

export function transferFunds(move, user){
    user.balance -= move.amount
   let updatedUser =  UserService.addMove(move, user);
   return ({type:types.ADD_MOVE, payload: updatedUser})
    
}