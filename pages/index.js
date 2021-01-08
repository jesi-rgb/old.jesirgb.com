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
        <div className="max-w-4xl mx-auto text-white m-20">
          <h1 className="text-8xl font-bold text-center">
            Welcome to my lovely place!
          </h1>
          <TopTracks className="grid grid-cols-2" />
        </div>
      </Layout>
    </>
  );
}
