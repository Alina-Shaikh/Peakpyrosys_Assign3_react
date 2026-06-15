import { Link } from "react-router-dom";

export default function UsersList() {
  const users = [
    {
      id: 1,
      name: "Alina",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Rahul",
      role: "React Developer",
    },
    {
      id: 3,
      name: "Aman",
      role: "UI Designer",
    },
  ];

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
          👥 List Rendering Example
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "25px",
          }}
        >
          This example demonstrates rendering lists dynamically
          using the JavaScript map() method in React.
        </p>

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
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "10px",
                }}
              >
                👤
              </div>

              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "8px",
                }}
              >
                {user.name}
              </h3>

              <p
                style={{
                  color: "#64748b",
                }}
              >
                {user.role}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#64748b",
          }}
        >
          Total Users: <strong>{users.length}</strong>
        </div>
      </div>
    </div>
  );
}