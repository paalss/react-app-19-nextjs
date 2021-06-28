import Layout from "../components/layout/Layout";
import "../styles/globals.css";

// root component for å affektere alle pages
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
