// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setUser, clearUser } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  return (
      <div>
        <h1>Counter: { counter.counter ? counter.counter : '?' } </h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <h2>User: {user.user ? user.user : 'No user set'}</h2>
          <button onClick={() => dispatch(setUser('Federico'))}>Set User</button>
          <button onClick={() => dispatch(clearUser())}>Clear User</button>
      </div>
  );
};
export default App;
