import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };

    case "RESET":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const onReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
