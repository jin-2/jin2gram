import { createStore, combineReducers } from 'redux';
import users from './modules/users';

const reducer = combineReducers({
    users,
});

let configureStore = initialState => createStore(reducer);

export default configureStore;