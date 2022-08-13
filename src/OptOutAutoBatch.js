import { useState } from "react";
import { flushSync } from "react-dom";
// Since React 18 comes with Automatic Batching by default.
// You can opt out of this by flushSync()

export default function OptOutAutoBatch() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    flushSync(() => {
      setCount((state) => ++state);
    });
    flushSync(() => {
      setFlag((state) => !state);
    });
  }
  return (
    <div className="AutoBatch">
      <h1>Opt Out of AutoBatching Demo</h1>
      <h2>Click on update button to see Opt Out of Auto Batching update</h2>
      <p>Count = {count}</p>
      <p>Flag = {flag === false ? "False" : "True"}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
