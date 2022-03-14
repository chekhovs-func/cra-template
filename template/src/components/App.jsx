import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

main {
  justify-content: center;
  align-items: center;

  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 100%);

  h1 {
    color: rgba(255, 255, 255, 100%);
  }
}

`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <h1>It's alive!</h1>
      </main>
    </>
  );
}
