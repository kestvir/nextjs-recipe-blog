import Layout from "../components/Layout";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
