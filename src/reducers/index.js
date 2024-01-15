// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducers from './userReducer';
import counterReducers from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducers,
    user: userReducers,
});

export default rootReducer;