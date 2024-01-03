// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducers';
import counterReducers from "./counterReducers";
import cartReducer from "./cartReducers";

const rootReducer = combineReducers({
    counter: counterReducers,
    user: userReducer,
    cart: cartReducer,
});

export default rootReducer;
