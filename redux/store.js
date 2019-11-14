import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { testReducer } from "./reducers/testReducer";

const rootReducer = combineReducers({ test: testReducer });

const Store = initialState => createStore(rootReducer, initialState, compose(applyMiddleware(thunk, logger)));

export default Store;
