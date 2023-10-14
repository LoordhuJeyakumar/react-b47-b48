import React, { useRef } from "react";
import SetInputFocus from "./components/SetInputFocus";


function App() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
    console.log(inputRef);
  };

  return (
    <div>
      App
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Focus Input</button>
        <SetInputFocus inputRef={inputRef}></SetInputFocus>
      </div>
    </div>
  );
}

export default App;
