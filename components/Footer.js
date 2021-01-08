import Container from "./container";

import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

//bug correction
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Footer() {
  return (
    <footer className="bottom-0 max-w-screen-xl mx-auto items-center object-center border-t-2 border-gray-200 text-gray-300">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <Link href="/">
            <a className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2  hover:text-accent-1 transition-colors">
              <h3>Jesús Rascón</h3>
            </a>
          </Link>
          <Link href="https://www.instagram.com/jrascon_">
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                className="transform scale-250 mx-7 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.twitter.com/jesi_rgb">
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                className="transform scale-250 mx-7 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.github.com/jesi-rgb">
            <a>
              <FontAwesomeIcon
                icon={faGithub}
                className="transform scale-250 mx-7 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/jesús-enrique-cartas-rascón-8716131a5/">
            <a>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="transform scale-250 mx-7 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>
          <Link href="https://t.me/jrascon">
            <a>
              <FontAwesomeIcon
                icon={faTelegram}
                className="transform scale-250 mx-7 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>
          <h4 className="text-2xl text-right lg:text-5xl font-bold tracking-tighter leading-tight lg:text-right mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            2021
          </h4>
        </div>
      </Container>
    </footer>
  );
}
