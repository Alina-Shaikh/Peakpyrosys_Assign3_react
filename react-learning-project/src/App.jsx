
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import UsersList from "./components/UsersList";
import ApiExample from "./components/ApiExample";
import StyledButton from "./components/StyledButton";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>React Learning Project</h1>

        <p>This project covers:</p>

        <ul>
          <li>Components</li>
          <li>JSX</li>
          <li>Props & State</li>
          <li>Event Handling</li>
          <li>Forms</li>
          <li>Conditional Rendering</li>
          <li>List Rendering</li>
          <li>React Router</li>
          <li>API Calls</li>
          <li>Styled Components</li>
        </ul>

        <nav style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
          <Link to="/counter">Counter</Link>
          <Link to="/form">Form</Link>
          <Link to="/users">Users</Link>
          <Link to="/api">API</Link>
          <Link to="/styled">Styled</Link>
        </nav>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/form" element={<FormExample />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/api" element={<ApiExample />} />
      <Route path="/styled" element={<StyledButton />} />
    </Routes>
  );
}
