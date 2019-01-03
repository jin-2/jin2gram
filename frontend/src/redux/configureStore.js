import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './modules/users';
import thunk from 'redux-thunk';

const middleware = [thunk];
const reducer = combineReducers({
    users,
});

let configureStore = initialState => createStore(reducer, applyMiddleware(...middleware));

export default configureStore;