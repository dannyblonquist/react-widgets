import { useState, useEffect } from "react";
import HideText from "./HideText";
import "./App.css";
import ToggleGreeting from "./ToggleGreeting";

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="App">
        <div className="count">{count}</div>
        <button onClick={() => setCount((count) => count + 1)} className="add">
          add
        </button>
        <button
          onClick={() => setCount((count) => count - 1)}
          className="subtract"
        >
          subtract
        </button>
      </div>
      <HideText />
      <ToggleGreeting />
    </>
  );
}
