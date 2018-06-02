import * as types from './types';
import _ from 'lodash';
import UserService from '../service/UserService'


const initState = {
    contacts: [],
}

export function contactsReducer(state = initState, action) {
    let newState;
    switch (action.type) {
        case types.LOAD_CONTACTS:
         newState = _.cloneDeep(state);
            newState.contacts = action.payload
            return newState;
            break;
        case types.ADD_CONTACT:
        newState = _.cloneDeep(state);
            newState.contacts = action.payload
            return newState;
            break;

        default:
        return state; 
    }
}

////////////////////
var user = UserService.loadUser();
const userInitState = {
    user,
}


export function userReducer(state = userInitState, action) {
    let newState;

    switch(action.type) {
        case types.LOGIN_USER:
        newState = _.cloneDeep(state);
        console.log('payload login user',action.payload);
        
        newState.user = action.payload
        return newState;
        break;

        case types.ADD_MOVE:
        newState = _.cloneDeep(state);
        console.log('payload',action.payload);
        
        newState.user = action.payload
        return newState;
        break;

        default: 
        return state;
    }

}

