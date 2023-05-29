import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 20px;
  }
  50% {
    border-radius: 100px;

  }
  100% {
    transform: rotate(360deg);
    border-radius: 20px;
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  span {
    color: white;
    &:hover {
      font-size: 30px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <span>Happy </span>
      </Box>
    </Father>
  );
}

export default App;
