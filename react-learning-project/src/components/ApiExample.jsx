
import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiExample() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>API Call Example</h2>

        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
