import React, { useState } from "react";

function ReduxExample() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + Math.floor(Math.random() * 10));
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - Math.floor(Math.random() * 10));
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <input type="text" value={counter} className="form-control" />
        <br/>
        <button onClick={increment} className="btn btn-secondary btn-block">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-secondary btn-block">
          Decrement
        </button>
      </div>
    </div>
  );
}
export default ReduxExample;
