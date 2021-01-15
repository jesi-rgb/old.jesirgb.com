import Footer from "@/components/Footer";
import { HeaderLanding } from "@/components/HeaderLanding";

import TopTracks from "@/components/TopTracks";

export default function Landing() {
  return (
    <>
      <HeaderLanding />

      <svg
        width="3000"
        height="2500"
        viewBox="60 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-10 z-0"
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

      <div className="absolute w-full text-white text-3xl font-light m-40 top-54">
        I am{" "}
        <h1 className="text-9xl 2xl:text-10xl m-10 font-bold font-blogpost tracking-tighter">
          Jesús Rascón
        </h1>
        <div className="my-16 w-1/2 md:w-1/4 font-light text-4xl mr-auto">
          Data driven journalist, frontend developer, musician and creative.
        </div>
      </div>

      <svg
        width="3000"
        height="2500"
        viewBox="60 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>

      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <TopTracks />
        <Footer />
      </div>
    </>
  );
}
