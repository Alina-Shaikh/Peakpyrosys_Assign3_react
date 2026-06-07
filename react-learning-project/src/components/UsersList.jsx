
export default function UsersList() {
  const users = ["Alina", "Rahul", "Aman"];

  return (
    <div className="container">
      <div className="card">
        <h2>List Rendering</h2>

        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
