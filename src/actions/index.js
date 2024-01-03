export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const clearUser = () => ({ type: 'CLEAR_USER' });

export const setCart = (cart) => ({ type: 'SET_CART', payload: cart });
export const clearCart = () => ({ type: 'CLEAR_CART' });
