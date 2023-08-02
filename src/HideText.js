import { useState } from "react";

const HideText = () => {
  const [isTextDisplayed, setIsTextDisplayed] = useState(true);
  const textDisplayed = isTextDisplayed ? "hide me" : "";
  const buttonText = isTextDisplayed ? "hide" : "show";

  return (
    <>
      <h1>{textDisplayed}</h1>
      <button onClick={() => setIsTextDisplayed((i) => !i)}>
        {buttonText}
      </button>
    </>
  );
};
export default HideText;
