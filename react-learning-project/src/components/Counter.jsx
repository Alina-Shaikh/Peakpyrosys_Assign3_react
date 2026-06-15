import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3b82f6",
            fontWeight: "bold",
          }}
        >
          ← Back to Dashboard
        </Link>

        <h2
          style={{
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          🔢 useState Counter Example
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "25px",
          }}
        >
          This example demonstrates React's useState Hook for
          managing component state.
        </p>

        <div
          style={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
              color: "#2563eb",
            }}
          >
            {count}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setCount(count - 1)}
              style={{
                background: "#ef4444",
                color: "white",
              }}
            >
              ➖ Decrease
            </button>

            <button
              onClick={() => setCount(0)}
              style={{
                background: "#64748b",
                color: "white",
              }}
            >
              🔄 Reset
            </button>

            <button
              onClick={() => setCount(count + 1)}
              style={{
                background: "#22c55e",
                color: "white",
              }}
            >
              ➕ Increase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}