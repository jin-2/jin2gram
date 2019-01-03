import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './modules/users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk];
const reducer = combineReducers({
    users,
});

const env = process.env.NODE_ENV;

if (env === 'development') {
    middleware.push(logger);
}

let configureStore = initialState => createStore(reducer, applyMiddleware(...middleware));

export default configureStore();