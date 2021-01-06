import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} />;
}
