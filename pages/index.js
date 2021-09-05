import Footer from "@/components/Footer";
import { HeaderLanding } from "@/components/HeaderLanding";

import TopTracks from "@/components/TopTracks";
import Head from "next/head";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Thinking thoughts</title>
      </Head>
      <HeaderLanding />

      <svg
        viewBox="-10 0 950 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:inline xl:visible xl:absolute xl:-top-10 xl:mt-32 xl:h-full"
      >
        <svg
          width="540"
          height="540"
          viewBox="0 -5 540 529"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            style={{ "mix-blend-mode": "lighten" }}
            cx="171"
            cy="171"
            r="171"
            fill="#1ABC9C"
            id="circle-top"
          />
          <circle
            style={{ "mix-blend-mode": "lighten" }}
            cx="369"
            cy="242"
            r="171"
            fill="#9C88DD"
            id="circle-right"
          />
          <circle
            style={{ "mix-blend-mode": "lighten" }}
            cx="206"
            cy="358"
            r="171"
            fill="#0000FF"
            id="circle-bot"
          />
        </svg>
      </svg>

      <div className="ml-9 z-10 text-white text-xl xl:text-3xl font-light xl:m-40 xl:top-20">
        I am{" "}
        <h1 className="text-5xl xl:text-8xl my-10 font-bold font-blogpost tracking-tighter">
          Jesús Rascón
        </h1>
        <div className="mt-8 w-1/2 md:w-1/4 text-xl xl:text-3xl">
          Data driven journalist and engineer, frontend developer, creative
          assistant and producer.
        </div>
      </div>

      <svg
        width="400"
        viewBox="60 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:inline xl:h-full xl:mt-42"
      ></svg>

      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <TopTracks />
        <Footer />
      </div>
    </>
  );
}
