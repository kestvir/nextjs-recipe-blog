import Layout from "../components/Layout";
import theme from "../styled/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styled/GlobalStyle";
import { StyledContainer, MainGrid } from "../styled/layout/Grid";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <StyledContainer>
          <MainGrid>
            <Component {...pageProps} />
            <Sidebar />
          </MainGrid>
        </StyledContainer>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
