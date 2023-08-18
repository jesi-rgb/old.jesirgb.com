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
      <div className="py-8 space-y-9 xl:space-y-0 flex flex-col xl:flex-row items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold tracking-tighter text-center mb-2 md:my-0 w-full md:w-1/3 font-sans lg:text-left">
            <h3>Jesús Rascón</h3>
          </a>
        </Link>

        <div className="flex flex-row justify-between space-x-8 xl:space-x-5 items-center w-full md:w-1/3">
          <Link href="https://www.instagram.com/jrascon_">
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                className="transform scale-150  hover:text-accent-1-lighter transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.twitter.com/jesi_rgb">
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                className="transform scale-150  hover:text-accent-1-lighter transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.github.com/jesi-rgb">
            <a>
              <FontAwesomeIcon
                icon={faGithub}
                className="transform scale-150  hover:text-accent-1-lighter transition-colors"
              />
            </a>
          </Link>
          <Link href="mailto:blograso@gmail.com">
            <a>
              <FontAwesomeIcon
                icon={faAt}
                className="transform scale-150  hover:text-accent-1-lighter transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/jesi-rgb/">
            <a>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="transform scale-150  hover:text-accent-1-lighter transition-colors"
              />
            </a>
          </Link>
          <Link href="https://t.me/jrascon">
            <a>
              <FontAwesomeIcon
                icon={faTelegram}
                className="transform scale-150  hover:text-accent-1-lighter transition-colors"
              />
            </a>
          </Link>
        </div>
        <div className="text-xl font-bold text-center tabular-nums w-full md:w-1/3 md:text-right">
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
