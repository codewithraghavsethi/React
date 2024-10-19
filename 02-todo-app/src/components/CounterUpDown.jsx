import React, { useState } from "react";

const CounterUpDown = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Raghav");
  return (
    <div>
      <p>Counter Number - {count}</p>
      <button className="todo-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="todo-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <h4>Hello {value} Ji</h4>
      <p>Number is {count % 2 === 0 ? "Even" : "Odd"}</p>
    </div>
  );
};

export default CounterUpDown;
