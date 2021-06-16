import React, { useState, useEffect } from "react";
//hook to change title on every inc or dec
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

function Hooks() {
  const [count, setCount] = useState(1);
  // increase 1
  const incrementCount = () => setCount(count + 1);
  //decrease 1
  const decrementCount = () => setCount(count - 1);
  // set title with current titlw
  useDocumentTitle(`You clicked ${count} times`);

  return (
    <div>
      <div className="jumbotron">
        <h1>Hooks</h1>
        <input type="number" value={count} />
        <br />
        <button onClick={incrementCount}>+</button>
        {/* decrease count when count > 1 */}
        <button onClick={count > 1 ? decrementCount : count === 1}>-</button>
      </div>
    </div>
  );
}
export default Hooks;
