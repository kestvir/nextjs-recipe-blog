import Layout from "../components/Layout";
import "../styles/main.scss";
import theme from "../styled/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styled/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
