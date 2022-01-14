import React, { useState } from "react";
import ReactDOM from "react-dom";
function Counter() {
  const [conter, setconter] = useState(0);
  const increse = () => setconter(conter + 1);
  return (
    <div className="counter">
      <header className="App-header">Flutter Demo Home Page With React</header>
      <div className="Body-div">
        <h2>
          You have pushed the button this many times : <br />
          {conter}
        </h2>
      </div>
      <div className="Counter-div">
        <button className="Btn" onClick={increse}>
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
