import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
