import TopTracks from "@/components/TopTracks";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faICursor,
  faBook,
  faUser,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Thinking thoughts</title>
      </Head>

      <section class="text-white mb-10 xl:mt-20">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="text-5xl xl:text-7xl mb-4 font-bold font-blogpost text-white">
              Jesús Enrique Rascón
            </h1>
            <p class="mb-8 mt-10 leading-relaxed text-lg xl:text-2xl font-blogpost text-opacity-60">
              I am a freelance mathematical animator at{" "}
              <a
                className="font-bold text-accent-1-lighter hover:text-accent-1"
                href="https://www.youtube.com/c/Reducible"
              >
                Reducible
              </a>
              . Prev at{" "}
              <a
                className="font-bold text-accent-1-lighter hover:text-accent-1"
                href="https://www.youtube.com/c/Veritasium"
              >
                Veritasium
              </a>
              .
            </p>
          </div>
          <div className="mt-10 flex flex-col space-y-5 xl:flex-row xl:space-x-9 xl:space-y-0">
            <a href="/portfolio">
              <button class="text-accent-1-lighter bg-accent-1 bg-opacity-20 border-0 border-accent-1 py-3 px-6 focus:outline-none hover:bg-opacity-50 rounded text-lg">
                <FontAwesomeIcon icon={faBook} className="text-lg mr-3" />{" "}
                Portfolio
              </button>
            </a>

            <a href="/curriculum">
              <button class="text-accent-1-lighter bg-accent-1 bg-opacity-20 border-0 border-accent-1 py-3 px-6 focus:outline-none hover:bg-opacity-50 rounded text-lg">
                <FontAwesomeIcon icon={faEllipsisV} className="text-lg mr-3" />{" "}
                Curriculum
              </button>
            </a>

            <a href="/blog">
              <button class="text-accent-1-lighter bg-accent-1 bg-opacity-20 border-0 border-accent-1 py-3 px-6 focus:outline-none hover:bg-opacity-50 rounded text-lg">
                <FontAwesomeIcon icon={faICursor} className="text-lg mr-3" />{" "}
                Blog
              </button>
            </a>

            <a href="/about">
              <button class="text-accent-1-lighter bg-accent-1 bg-opacity-20 border-0 border-accent-1 py-3 px-6 focus:outline-none hover:bg-opacity-50 rounded text-lg">
                <FontAwesomeIcon icon={faUser} className="text-lg mr-3" /> About
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <TopTracks />
      </div>
    </>
  );
}
