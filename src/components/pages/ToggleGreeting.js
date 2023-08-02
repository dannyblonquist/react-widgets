import React from "react";
import { useState } from "react";

const ToggleGreeting = () => {
  const [isGreetingHello, setIsGreetingHello] = useState(true);
  const greetingHello = isGreetingHello ? "hello" : "goodbye";
  return (
    <>
      <h1>{greetingHello}</h1>
      <button onClick={() => setIsGreetingHello((i) => !i)}>toggle me</button>
    </>
  );
};
export default ToggleGreeting;
