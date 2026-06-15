import { useState } from "react";
import { Link } from "react-router-dom";

export default function FormExample() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email");
      setSuccess(false);
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address");
      setSuccess(false);
      return;
    }

    setMessage("Form Submitted Successfully 🎉");
    setSuccess(true);
    setEmail("");
  };

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
          📝 Form Validation Example
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "20px",
          }}
        >
          This example demonstrates form handling, validation,
          controlled components, and state management using React.
        </p>

        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            style={{
              marginTop: "15px",
              background: "#3b82f6",
              color: "white",
              width: "100%",
            }}
          >
            Submit Form
          </button>
        </form>

        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              borderRadius: "8px",
              background: success
                ? "#dcfce7"
                : "#fee2e2",
              color: success
                ? "#166534"
                : "#991b1b",
              fontWeight: "600",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}