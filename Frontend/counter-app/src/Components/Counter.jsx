import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 5)}>Increment By 5</button>
      </div>
    </div>
  );
};

export default Counter;
