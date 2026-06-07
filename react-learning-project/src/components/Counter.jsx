
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h2>useState Example</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}
