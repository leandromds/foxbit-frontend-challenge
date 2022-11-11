import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../theme';

const MockTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default MockTheme;
