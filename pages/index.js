import Layout from "../components/Layout";
import Head from "next/head";
import TopTracks from "../components/TopTracks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thinking thoughts</title>
      </Head>
      <Layout>
        <div className="text-white">
          <h1 className="text-8xl font-bold text-center">
            Welcome to my lovely place!💖
          </h1>
          <TopTracks />
        </div>
      </Layout>
    </>
  );
}
