//actions/index.js
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const clearUser = () => ({ type: 'CLEAR_USER' });