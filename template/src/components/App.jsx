import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
`;

const StyledApp = styled.main`
  justify-content: center;
  align-items: center;

  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: #00252a;

  h1 {
    font-size: 102px;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1>👍</h1>
      </StyledApp>
    </>
  );
}
