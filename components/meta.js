import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1abc9c" />
      <meta name="theme-color" content="#1abc9c" />
      <meta
        name="description"
        content={
          "Personal website for Jesús Rascón: Mathematical animator at Reducible"
        }
      />
    </Head>
  );
}
