import { useState, startTransition } from "react";

//StartTransition lets up improve user interaction by
//marking specific updates as transitions.
// We can classify state updates into two categories
// first one is urgent updates which reflect direct interaction
// e.g- typing in input-field,clicking etc
// second one is transition updates which reflects transition in the UI
// from one  View to Another  e.g- filtering list is not
//urgent therefore can be marked as transition

// Updates wrapped in StartTransition API will be
// handled as non-urgent and will be interuppted if
// more urgent updates like click,keypress come in.

export default function StartTransition() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount((state) => ++state);
    startTransition(() => {
      setTimeout(() => {
        setFlag((state) => !state);
      }, 1000);
    });
  }
  return (
    <div className="AutoBatch">
      <h1>StartTransition Demo</h1>
      <h2>Click on update button to see startTransition update</h2>
      <p>Count = {count}</p>
      <p>Flag = {flag === false ? "False" : "True"}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
