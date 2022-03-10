import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #0A1128;
        --subtitle-color: #bdbdbd;
        --white-color: #FFFFFF;
        --light-gray-color: #EEEEEE;
        --secondary-color: crimson;
        --gap: 3rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        color: var(--primary-color);
        line-height: 1.5;
        background-color: var(--white-color);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
    }

    h1 {
        font-size: 6rem;
        text-transform: uppercase;
    }

    h2 {
        font-size: 6rem;
        margin-bottom: 5rem;
        text-transform: uppercase;
        line-height: 1.2;
    }

    h3 {
        font-size: 4.5rem;
    }

    h4 {
        font-size: 4rem;
    }

    h5 {
        font-size: 3.5rem;
    }

    h6 {
        font-size: 2rem;
        color: var(--subtitle-color)
    }

    a {
        text-decoration: none;
    }

    p {
        margin-bottom: 3rem;
    }

    ${media.lessThan("medium")`
        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 3.4rem;
        }

        h4 {
            font-size: 3.2rem;
        }

        h5 {
            font-size: 2.5rem;
        }

        h6 {
            font-size: 1.5rem;
        }
    `}

`;

export default GlobalStyle;
