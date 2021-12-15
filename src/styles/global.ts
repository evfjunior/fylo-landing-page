import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Open Sans Regular'), local('Open-Sans-Regular'),
        url('/fonts/open-sans-v27-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      src: local('Open Sans Bold'), local('Open-Sans-Bold'),
        url('/fonts/open-sans-v27-latin-700.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      src: local('Raleway Regular'), local('Raleway-Regular'),
        url('/fonts/raleway-v22-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url('/fonts/raleway-v22-latin-700.woff2') format('woff2');
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    *::after,
    *::before {
      box-sizing: inherit;
    }

    body,
    html,
    #__next {
      height: 100%;
    }

    html {
      min-width: 320px;
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.bgColor};
      color: ${theme.colors.white};
      font-family: ${theme.font.family.main};
      font-size: ${theme.font.sizes.medium};
      scroll-behavior: smooth;
    }

    input,
    select,
    textarea {
      font: inherit;
      outline: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      border: none;
      outline: none;
      font-size: inherit;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    h1,
    h2,
    h3 {
      font-family: ${theme.font.family.heading};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`
