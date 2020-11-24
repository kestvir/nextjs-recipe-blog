import Layout from "../components/Layout";
import "../styles/custom.css";

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
