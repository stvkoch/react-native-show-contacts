import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import createLogger from 'redux-logger';
// join all pieces of redux to create a store
const logger = createLogger();
const finalCreateStore = applyMiddleware(
    thunk,
    logger
)(createStore);

import reducer from '../reducer';
const store = finalCreateStore(reducer);
export default store;
