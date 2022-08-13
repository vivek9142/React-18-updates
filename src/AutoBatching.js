import { useState } from "react";
//Batching refers to grouping multiple state updates into
//a single rerender for better performance
//auto-batching is enabled by default in React18
// Before React 18 the aut-=batching was not present so two
//different was updated by react on two rerenders

export default function AutoBatching() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount((state) => ++state);
    setFlag((state) => !state);
  }
  return (
    <div className="AutoBatch">
      <h1>AutoBatching Demo</h1>
      <h2>Click on update button to see auto batching update</h2>
      <p>Count = {count}</p>
      <p>Flag = {flag === false ? "False" : "True"}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
