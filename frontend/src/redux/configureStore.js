import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { i18nState } from "redux-i18n";
import user from "./modules/user";
import photos from "./modules/photos";

const env = process.env.NODE_ENV;

const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

if (env === "development") {
  middleware.push(logger);
}

const reducer = combineReducers({
  user,
  photos,
  router: connectRouter(history),
  i18nState
});

let configureStore;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (env === "development") {
  configureStore = initialState =>
    createStore(reducer, composeEnhancer(applyMiddleware(...middleware)));
} else {
  configureStore = initialState =>
    createStore(reducer, applyMiddleware(...middleware));
}

export { history };

export default configureStore();
