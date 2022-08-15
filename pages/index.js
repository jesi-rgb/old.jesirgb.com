import TopTracks from "@/components/TopTracks";
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
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import LandingButton from "@/components/LandingButton";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Jesús Rascón</title>
      </Head>

      <section className="text-white mb-10 xl:mt-20">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-5xl xl:text-7xl mb-4 font-bold font-blogpost text-white">
              Jesús Enrique Rascón
            </h1>
            <p className="mb-8 mt-10 leading-relaxed text-lg xl:text-2xl font-display text-opacity-60">
              I am a freelance mathematical animator at{" "}
              <a
                className="font-bold text-accent-1-lighter hover:text-accent-1"
                href="https://www.youtube.com/c/Reducible"
              >
                <FontAwesomeIcon icon={faCubes} className="" /> Reducible
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
          <div className="text-center mt-10 flex flex-col space-y-5 xl:flex-row xl:space-x-9 xl:space-y-0">
            <LandingButton link="/portfolio" icon={faBook} text="Portfolio" />
            <LandingButton
              link="/curriculum"
              icon={faAward}
              text="Curriculum"
            />
            <LandingButton link="/blog" icon={faICursor} text="Blog" />
            <LandingButton link="/about" icon={faUser} text="About" />
          </div>

          <div className="text-gray-400 flex flex-row justify-center space-x-8 xl:space-x-9 items-center my-2 mt-20 md:w-2/6">
            <Link href="https://www.instagram.com/jrascon_">
              <a>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="transform scale-150 hover:text-accent-1-lighter transition-colors"
                />
              </a>
            </Link>

            <Link href="https://www.twitter.com/jesi_rgb">
              <a>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="transform scale-150 hover:text-accent-1-lighter transition-colors"
                />
              </a>
            </Link>

            <Link href="https://www.github.com/jesi-rgb">
              <a>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="transform scale-150 hover:text-accent-1-lighter transition-colors"
                />
              </a>
            </Link>
            <Link href="mailto:blograso@gmail.com">
              <a>
                <FontAwesomeIcon
                  icon={faAt}
                  className="transform scale-150 hover:text-accent-1-lighter transition-colors"
                />
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/jesi-rgb/">
              <a>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="transform scale-150 hover:text-accent-1-lighter transition-colors"
                />
              </a>
            </Link>
            <Link href="https://t.me/jrascon">
              <a>
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="transform scale-150 hover:text-accent-1-lighter transition-colors"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className="hidden lg:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <TopTracks />
      </div>
    </>
  );
}
