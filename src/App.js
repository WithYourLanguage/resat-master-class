import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.span`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Father as="body">
      <Title>Happy </Title>
    </Father>
  );
}

export default App;
