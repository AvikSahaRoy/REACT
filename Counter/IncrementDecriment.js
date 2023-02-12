import React, { useState } from "react";

function App() {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);
  
 // Function is called everytime increment button is clicked
  const increment = () => {
    setCounter(counter + 1);  // Counter state is incremented
  };
  
  // Function is called everytime decrement button is clicked
  const decrement = () => {
    setCounter(counter - 1);  // Counter state is decremented
  };
  return (
    <div>
      <h1>Onclick</h1>
      <button onClick={increment}>+</button>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>
      <br />
      <br />

      <h1>OnMouseEnter</h1>
      <button onMouseEnter={increment}>+</button>
      <p>{counter}</p>
      <button onMouseEnter={decrement}>-</button>
    </div>
  );
}

export default App;
