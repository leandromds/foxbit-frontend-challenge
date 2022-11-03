import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    bg: {
      main: '#E7E9EE',
      main_contrast: '#FFFFFF',
      positive: {
        main: '#EBFAF4'
      },
      negative: {
        main: '#FCEDED'
      }
    },
    content: {
      positive: {
        main: '#214739'
      },
      negative: {
        main: '#5C3030'
      }
    },
    paragraph: {
      lighter: '#B7B8BE',
      light: '#6F7075'
    }
  },
  typography: {
    xxxs: 10,
    xxs: 12,
    sm: 16,
    md: 20,
  }
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'gilroymedium', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    line-height: 1.4;
  }
`;
