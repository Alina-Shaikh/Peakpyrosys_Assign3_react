
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
`;

export default function StyledButton() {
  return (
    <div className="container">
      <div className="card">
        <h2>Styled Components</h2>

        <Button>Styled Button</Button>
      </div>
    </div>
  );
}
