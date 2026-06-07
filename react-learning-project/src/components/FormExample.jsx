
import { useState } from "react";

export default function FormExample() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Invalid Email");
    } else {
      setMessage("Form Submitted Successfully");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Form Validation</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" style={{marginTop:"10px"}}>
            Submit
          </button>
        </form>

        <p>{message}</p>
      </div>
    </div>
  );
}
