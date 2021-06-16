import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, accRights } from "../actions";
function Redux() {
  const counter = useSelector((state) => state.counter);
  const accessRights = useSelector((state) => state.accessRights);
  const dispath = useDispatch();
  return (
    <div className="Container">
      <br />
      <input type="text" value={counter} />
      <button
        onClick={() => dispath(increment(Math.floor(Math.random() * 10)))}
      >
        {" "}
        +{" "}
      </button>{" "}
      <button onClick={() => dispath(decrement(Math.floor(Math.random() * 10)))}> - </button>
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

export default Redux;
