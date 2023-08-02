import React from "react";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const add = () => setCount((c) => c + 1);
  const subtract = () => {
    if (count > 1) setCount((c) => c - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => add()}>add</button>
      <button onClick={() => subtract()}>subtract</button>
    </>
  );
};

export default Counter;
