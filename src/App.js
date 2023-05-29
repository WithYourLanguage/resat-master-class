import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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

const Emoji = styled.span`
  color: white;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 30px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <Emoji>Happy </Emoji>
      </Box>
    </Father>
  );
}

export default App;
