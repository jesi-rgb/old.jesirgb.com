import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faICursor,
  faBook,
  faUser,
  faCubes,
  faAward,
  faAt,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import LandingButton from "@/components/LandingButton";
import LandingLinkSection from "@/components/LandingLinkSection";
import Grid from "@/components/Grid";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Jesús Rascón</title>
      </Head>

      <html className="bg-grid-slate-900/[0.04]" id="index">
        <section className="text-white mb-10 md:mt-20 h-screen">
          <div className="xl:w-1/2 mx-10 xl:mx-auto mt-96">
            <h1
              style={{ textShadow: "0 0 10px #ffffff88" }}
              className="text-8xl shadow-co md:text-9xl text-left leading-none tracking-wide mb-4 font-bold font-display text-white"
            >
              Jesús Enrique Rascón
            </h1>
            <div className="mb-8 mt-10 text-left leading-relaxed text-xl xl:text-2xl font-sans w-full">
              <p>
                I am a freelance mathematical animator at{" "}
                <a
                  className="font-bold text-accent-1-lighter hover:text-accent-1 transition-all"
                  href="https://www.youtube.com/c/Reducible"
                >
                  <FontAwesomeIcon icon={faCubes} className="" /> Reducible
                </a>
                .
              </p>

              <p>
                Previously at{" "}
                <a
                  className="font-bold text-accent-1-lighter hover:text-accent-1 transition-all"
                  href="https://www.youtube.com/c/Veritasium"
                >
                  Veritasium
                </a>
                .
              </p>
              <p>I am also a web developer and designer.</p>
            </div>
          </div>
          <div className="text-center mt-14 sm:mt-36 animate-bounce">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </section>

        <LandingLinkSection />
      </html>
    </>
  );
}
