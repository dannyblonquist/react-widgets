import { useState, useEffect } from "react";
import HideText from "./HideText";
import Counter from "./Counter";
import "./App.css";
import ToggleGreeting from "./ToggleGreeting";

export default function App() {
  return (
    <>
      <Counter />
      <HideText />
      <ToggleGreeting />
    </>
  );
}
