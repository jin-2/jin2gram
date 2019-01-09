import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './modules/users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

const env = process.env.NODE_ENV;

const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

if (env === 'development') {
    middleware.push(logger);
}

const reducer = combineReducers({
    router: connectRouter(history),
    users,
});

let configureStore = initialState => createStore(reducer, applyMiddleware(...middleware));

export { history };

export default configureStore();