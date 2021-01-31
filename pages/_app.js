import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="shortcut icon" href="/favicon.ico" />
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
      rel="stylesheet"
    />
  </Head>;
  return <Component {...pageProps} />;
}
