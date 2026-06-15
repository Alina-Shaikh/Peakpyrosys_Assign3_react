import styled from "styled-components";
import { Link } from "react-router-dom";

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: #10b981;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
`;

const DangerButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
  }
`;

export default function StyledButton() {
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
          🎨 Styled Components Example
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "25px",
          }}
        >
          This example demonstrates CSS-in-JS styling using
          Styled Components in React.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <PrimaryButton>
            Primary Button
          </PrimaryButton>

          <SecondaryButton>
            Success Button
          </SecondaryButton>

          <DangerButton>
            Danger Button
          </DangerButton>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            background: "#f8fafc",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h4 style={{ color: "#2563eb" }}>
            Features Demonstrated
          </h4>

          <ul
            style={{
              marginTop: "10px",
              paddingLeft: "20px",
              color: "#475569",
            }}
          >
            <li>Styled Components</li>
            <li>Reusable UI Components</li>
            <li>Hover Effects</li>
            <li>CSS-in-JS</li>
            <li>Modern Button Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}