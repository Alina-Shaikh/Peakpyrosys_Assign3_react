import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ApiExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

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
          🌐 API Call Example
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "20px",
          }}
        >
          Fetching user data from JSONPlaceholder using Axios and React Hooks.
        </p>

        {loading ? (
          <h3 style={{ textAlign: "center" }}>
            Loading users...
          </h3>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {users.map((user) => (
              <div
                key={user.id}
                style={{
                  background: "#f8fafc",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    color: "#2563eb",
                    marginBottom: "10px",
                  }}
                >
                  {user.name}
                </h3>

                <p>
                  📧 {user.email}
                </p>

                <p>
                  📱 {user.phone}
                </p>

                <p>
                  🏢 {user.company.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}