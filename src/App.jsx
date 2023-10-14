import React, { useRef } from "react";

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
      </div>
    </div>
  );
}

export default App;
