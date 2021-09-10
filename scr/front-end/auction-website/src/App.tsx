import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import styled from 'styled-components';
import { darkBlueTheme } from './Style/Themes/darkBlueTheme';

export const App = (): JSX.Element => (
  <ThemeProvider theme={darkBlueTheme()}>
    <PageContainer>
      <Router />
    </PageContainer>
  </ThemeProvider>
);

const PageContainer = styled.div`
  height: 100%;
`;
