import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './modules/users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import Reactotron from '../ReactotronConfig';
import { i18nState } from "redux-i18n"

const env = process.env.NODE_ENV;

const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

if (env === 'development') {
    middleware.push(logger);
}

const reducer = combineReducers({
    router: connectRouter(history),
    users,
    i18nState,
});

let configureStore;

if (env === 'development') {
    // 개발환경일 때는 Reactotron이랑 store을 생성하여 action을 볼 수 있게 함.
    configureStore = initialState => Reactotron.createStore(reducer, applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
    configureStore = initialState => createStore(reducer, applyMiddleware(...middleware));
}

export { history };

export default configureStore();