import { createStore, applyMiddleware, combineReducers } from 'redux';
import { contactsReducer, userReducer } from './reducers';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    contactsReducer,
    userReducer
});

export default function configStrore() {
    return createStore(
        allReducers,
        applyMiddleware(thunk)
    )
}

