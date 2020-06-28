import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '@redux/reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(thunk)));

export default store;