import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    bg: {
      main: '#E7E9EE',
      main_contrast: '#FFFFFF',
      positive: '#EBFAF4',
      negative:'#FCEDED',
      undefined: '#E7E9EE',
    },
    content: {
      positive: '#214739',
      negative: '#5C3030'
    },
    paragraph: {
      lighter: '#B7B8BE',
      light: '#6F7075'
    }
  },
  typography: {
    family: {
      semibold: 'gilroysemi_bold'
    },
    size: {
      xxxs: 10,
      xxs: 12,
      sm: 16,
      md: 20,
    }
  }
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'gilroysemi_bold';
    font-display: swap;
    src: url('/fonts/gilroy/gilroy-semibold.otf') format('opentype'),
        url('/fonts/gilroy/gilroy-semibold-webfont.woff2') format('woff2'),
        url('/fonts/gilroy/gilroy-semibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroybold';
    font-display: swap;
    src: url('/fonts/gilroy/gilroy-bold.otf') format('opentype'),
        url('/fonts/gilroy/gilroy-bold-webfont.woff2') format('woff2'),
        url('/fonts/gilroy/gilroy-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroyregular';
    font-display: swap;
    src: url('/fonts/gilroy/gilroy-regular.otf') format('opentype'),
        url('/fonts/gilroy/gilroy-regular-webfont.woff2') format('woff2'),
        url('/fonts/gilroy/gilroy-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroymedium';
    font-display: swap;
    src: url('/fonts/gilroy/gilroy-medium.otf') format('opentype'),
        url('/fonts/gilroy/gilroy-medium-webfont.woff2') format('woff2'),
        url('/fonts/gilroy/gilroy-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'gilroymedium';
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    line-height: 1.4;
  }
`;
