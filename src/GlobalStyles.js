import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Pretendard", "Helvetica", "Arial", sans-serif;
        word-break: keep-all;
    }
`;

export default GlobalStyles;
