// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
  );
};
export default App;
