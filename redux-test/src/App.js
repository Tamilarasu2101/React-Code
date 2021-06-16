import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, accRights } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const accessRights = useSelector((state) => state.accessRights);
  const dispath = useDispatch();
  return (
    <div className="Container">
      <h1>TotalValue: {counter}</h1>
      <button onClick={() => dispath(increment(5))}> + </button>{" "}
      <button onClick={() => dispath(decrement(3))}> - </button>
      {accessRights ? (
        <div>
          <h3> Processing </h3>{" "}
          <button onClick={() => dispath(accRights(false))}>Disable</button>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <h3> Not processing </h3>{" "}
          <button onClick={() => dispath(accRights(true))}>Enable</button>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
