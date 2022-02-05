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
import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-gray-300 mt-32">
      <div className="py-8 space-y-9 md:space-y-0 md:py-10 flex flex-col md:flex-row items-center">
        <Link href="/">
          <a className="text-3xl mb-2 md:my-0 md:w-2/6 font-bold tracking-tighter leading-tight text-left hover:text-accent-1 transition-colors">
            <h3>Jesús Rascón</h3>
          </a>
        </Link>

        <div className="flex flex-row justify-center space-x-10 md:space-x-14 xl:space-x-20 items-center my-2 md:my-0 md:w-2/6">
          <Link href="https://www.instagram.com/jrascon_">
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                className="transform scale-150 md:scale-150 lg:scale-250 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.twitter.com/jesi_rgb">
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                className="transform scale-150 md:scale-150 lg:scale-250 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.github.com/jesi-rgb">
            <a>
              <FontAwesomeIcon
                icon={faGithub}
                className="transform scale-150 md:scale-150 lg:scale-250 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>
          <Link href="mailto:blograso@gmail.com">
            <a>
              <FontAwesomeIcon
                icon={faAt}
                className="transform scale-150 md:scale-150 lg:scale-250  hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/jesús-enrique-cartas-rascón-8716131a5/">
            <a>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="transform scale-150 md:scale-150 lg:scale-250 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>
          <Link href="https://t.me/jrascon">
            <a>
              <FontAwesomeIcon
                icon={faTelegram}
                className="transform scale-150 md:scale-150 lg:scale-250  hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>
        </div>
        <h4 className="text-xl md:text-3xl my-3 md:w-2/6 md:my-0 font-bold tracking-tighter text-right">
          {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
}
