import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --main-color: #5a6afb;
    --gray-color: #f5f5f7;
    --gray-color-2: #d2d2d2
    --text-color: #111827;
    --text-gray-color: #4b5563;
    --text-gray-color-2: #aaaaaa;
    --text-center: center;
    --font-title-size: 52px;
    --font-subtitle-size: 36px;
    --font-text-size-28: 28px;
    --font-text-size-24: 24px;
    --font-text-size-22: 22px;
    --font-text-size-20: 20px;
    --font-text-size-18: 18px;
    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-light: 300;
    --margin-large: 50px;
    --margin-medium: 25px;
    --margin-small: 12px;
    --color-highlight: #4b5563;
    --background-color: white;
    --box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    --border-color: 2px solid #8b97ff;
    --border-radius: 16px;
  }

  @media only screen and (max-width: 460px) {
    :root {
      --font-title-size: 41px;
      --font-subtitle-size: 28px;
      --font-text-size-26: 22px;
      --font-text-size-24: 20px;
      --font-text-size-20: 18px;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard", "Helvetica", "Arial", sans-serif ;
    word-break: keep-all;
    line-height: 1.2;
  }

  button, input, textarea{
    font-family: "Pretendard", "Helvetica", "Arial", sans-serif ;
    word-break: keep-all; 
    line-height: 1.3;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
