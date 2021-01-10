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
          <h1 className="text-3xl font-bold text-center mb-10 md:text-5xl 2xl:text-7xl">
            Welcome to my lovely place!💖
          </h1>
          <TopTracks />
        </div>
      </Layout>
    </>
  );
}
