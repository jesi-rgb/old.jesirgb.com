import Layout from "@/components/Layout";
import Head from "next/head";

import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>

      <Layout>
        <div className="mx-auto max-w-2xl text-justify text-white">
          <div className="text-5xl mb-4 mt-10 font-bold text-white">
            Profile
          </div>
          Multi-disciplinary professional, deeply intrigued by the process of
          learning and passionate about telling stories through data. Strong
          statistical background and experience applying data science techniques
          to solve complex problems. Developed a very wide skill set, ranging
          from computer science and design to multimedia creation and
          processing.
          <ul className="list-inside list-disc">
            <li className="list-item">Adobe Illustrator</li>
            <li className="list-item">Photoshop</li>
            <li className="list-item">Davinci Resolve</li>
            <li className="list-item">Logic Pro</li>
            <li className="list-item">LaTeX</li>
          </ul>
          <div className="text-4xl mb-4 mt-10 font-bold text-white">
            Experience
            <ul className="list-inside list-disc">
              <li className="list-item mt-10 text-2xl">
                Freelance mathematical animator
              </li>

              <div className="flex flex-row space-x-3">
                <div className="flex flex-row ml-4 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="transform scale-50 text-accent-1-lighter"
                  />
                  <span className="text-sm font-normal text-accent-1-lighter">
                    July 2021 - Present
                  </span>
                </div>
                <div className="flex flex-row ml-4 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="transform scale-50 text-accent-1-lighter"
                  />
                  <span className="text-sm font-normal text-accent-1-lighter">
                    Remote
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 text-sm font-normal">
                <li>
                  Working on shedding a light on how the concept of biodiversity
                  is understood in social media.
                </li>
                <li>Pre-processing and engineering of PLN based datasets</li>
                <li>
                  Helped supporting management's decision making regarding sales
                  using ggplot2 in R
                </li>
                <li>
                  Data labeling through machine learning based clustering
                  algorithms, using <strong>Python</strong>, Spacy and NLTK
                </li>
              </ul>
              <li className="list-item mt-10 text-2xl">
                Data analyst and engineer
              </li>
              <div className="flex flex-row space-x-3">
                <div className="flex flex-row ml-4 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="transform scale-50 text-accent-1-lighter"
                  />
                  <span className="text-sm font-normal text-accent-1-lighter">
                    January 2021 - May 2021
                  </span>
                </div>
                <div className="flex flex-row ml-4 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="transform scale-50 text-accent-1-lighter"
                  />
                  <span className="text-sm font-normal text-accent-1-lighter">
                    Universidad de Jaén
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 text-sm font-normal">
                <li>
                  Working on shedding a light on how the concept of biodiversity
                  is understood in social media.
                </li>
                <li>Pre-processing and engineering of PLN based datasets.</li>
                <li>
                  Helped supporting management's decision making regarding sales
                  using ggplot2 in R
                </li>
                <li>
                  Data labeling through machine learning based clustering
                  algorithms, using Python, Spacy and NLTK
                </li>
              </ul>

              <li className="list-item mt-10 text-2xl">Intern data engineer</li>
              <div className="flex flex-row space-x-3">
                <div className="flex flex-row ml-4 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="transform scale-50 text-accent-1-lighter"
                  />
                  <span className="text-sm font-normal text-accent-1-lighter">
                    September 2019 - May 2020
                  </span>
                </div>
                <div className="flex flex-row ml-4 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="transform scale-50 text-accent-1-lighter"
                  />
                  <span className="text-sm font-normal text-accent-1-lighter">
                    Universidad de Jaén
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 text-sm font-normal">
                <li>
                  Assisting and learning in the process of gathering and
                  arranging data
                </li>
                <li>Built tools for client tracking and management</li>
              </ul>
            </ul>
          </div>
          <div></div>
          <div className="text-4xl mb-4 mt-10 font-bold text-white">
            Education
          </div>
          <div></div>
          <div className="text-4xl mb-4 mt-10 font-bold text-white">Skills</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Layout>
    </>
  );
}
