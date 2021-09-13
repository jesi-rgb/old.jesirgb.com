import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="stylesheet" />
  </Head>;
  return <Component {...pageProps} />;
}
