import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

/**
 * Combine navigation and all the reducers together.
 */
const appState = combineReducers(reducers);
export const store = createStore(appState, applyMiddleware(thunk));