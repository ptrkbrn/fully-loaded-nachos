import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #282c34;
        color: white;
    }
    h1 {
        color: white;
        text-decoration: none;
        font-size: 1.5em;
        font-family: 'Cooper Black';
    }
    a {
        color: white;
    }
`;

export default GlobalStyle;
