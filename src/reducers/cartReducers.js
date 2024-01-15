// src/reducers/cartReducer.js
const cartReducer = (state = { cart: null }, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { cart: action.payload };
        case 'CLEAR_CART':
            return { cart: null };
        default:
            return state;
    }
};

export default cartReducer;