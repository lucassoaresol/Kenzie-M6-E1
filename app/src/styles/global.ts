import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
            --Color-background: ${({ theme }) => theme.background};
            --Color-background-secondary: ${({ theme }) =>
              theme.backgroundSecondary};
            --Color-text-primary: ${({ theme }) => theme.textPrimary};
            --Color-text-secondary: #99df0cff;
            --Color-primary: #FF577F;
            --Color-primary-Focus: #FF427F;
            --Color-primary-Negative: #59323F;
            --Color-grey-4: #121214;
            --Color-grey-3: #212529;
            --Color-grey-2: #343B41;
            --Color-grey-1: #868E96;
            --Color-grey-0: #F8F9FA;
    }
    a, article, body, button, div, footer, h1, h2, h3, h4, h5, h6, header, html, img, input, li, main, nav, p, section, ul {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        border: none;
    }
    body{
        background-color: var(--Color-background);
    }
    a{
        color: unset;
    }
    button{
        background-color: transparent;
        border-color:transparent;
        cursor: pointer;
    }


`;

export default GlobalStyle;
