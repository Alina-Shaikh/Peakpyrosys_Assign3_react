import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import UsersList from "./components/UsersList";
import ApiExample from "./components/ApiExample";
import StyledButton from "./components/StyledButton";

function Home() {
  const features = [
    {
      title: "Counter",
      description: "Learn useState & Event Handling",
      path: "/counter",
      icon: "🔢",
    },
    {
      title: "Form",
      description: "Controlled Components & Forms",
      path: "/form",
      icon: "📝",
    },
    {
      title: "Users",
      description: "List Rendering & Data Display",
      path: "/users",
      icon: "👥",
    },
    {
      title: "API Calls",
      description: "Axios & Fetch Integration",
      path: "/api",
      icon: "🌐",
    },
    {
      title: "Styled UI",
      description: "Styled Components",
      path: "/styled",
      icon: "🎨",
    },
  ];

  return (
    <div className="dashboard">
      <div className="hero">
        <h1>🚀 React Learning Dashboard</h1>

        <p>
          Explore React concepts through interactive examples including
          Components, Hooks, Forms, Routing, API Calls, and Styled Components.
        </p>
      </div>

      <div className="tech-section">
        <h2>Concepts Covered</h2>

        <div className="tech-tags">
          <span>Components</span>
          <span>JSX</span>
          <span>Props</span>
          <span>State</span>
          <span>Event Handling</span>
          <span>Forms</span>
          <span>Conditional Rendering</span>
          <span>List Rendering</span>
          <span>React Router</span>
          <span>API Calls</span>
          <span>Styled Components</span>
        </div>
      </div>

      <div className="cards">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.path}
            className="feature-card"
          >
            <div className="icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button className="explore-btn">
              Explore →
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
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