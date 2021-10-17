import { Circle } from "@/components/Circle";
import Layout from "@/components/Layout";
import { Line } from "@/components/Line";
import { Timeline } from "@/components/Timeline";
import Head from "next/head";

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>

      <Layout>
        <div className="font-blogpost text-white text-3xl"> YEAH</div>

        <Timeline size="1000"></Timeline>
      </Layout>
    </>
  );
}
