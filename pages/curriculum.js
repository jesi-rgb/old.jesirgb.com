import Layout from "@/components/Layout";
import Head from "next/head";

import {
  faCalendar,
  faLocationArrow,
  faChevronRight,
  faChartPie,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

import YoutubeViewsCount from "@/components/YoutubeViewsCount";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>

      <Layout>
        <div className="mx-2 xl:mx-auto xl:max-w-2xl text-gray-200">
          <div className="">
            <div className="text-5xl mb-3 font-bold text-green-300">
              Profile
            </div>
            <div className="text-xl text-gray-200 font-blogpost">
              <p className="mb-4">
                Multi-disciplinary professional, deeply intrigued by the process
                of learning and passionate about telling stories through data.
              </p>
              <p className="mb-4">
                Strong statistical background and experience applying data
                science techniques to solve complex problems.
              </p>
              <p className="mb-4">
                Developed a very wide skill set, ranging from computer science
                and design to multimedia creation and processing.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-4xl mb-3 font-bold text-purple-300">
              Experience
            </div>
            <ul className="list-inside">
              <li className="list-item mt-10 text-2xl font-blogpost">
                <FontAwesomeIcon icon={faChevronRight} className="mr-3" />
                Freelance mathematical animator
              </li>

              <div className="flex flex-row space-x-5">
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="mr-2 text-purple-200"
                  />
                  <span className="font-normal text-purple-200">
                    July 2021 - Present
                  </span>
                </div>
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="mr-1 text-purple-200"
                  />
                  <span className="font-normal text-purple-200">Remote</span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 font-blogpost">
                <li>
                  Created engaging animations earning{" "}
                  <strong>
                    <YoutubeViewsCount />
                  </strong>{" "}
                  views as part of the{" "}
                  <a
                    href="https://www.youtube.com/c/veritasium"
                    className="font-bold text-purple-300"
                  >
                    Veritasium
                  </a>{" "}
                  Creative team
                </li>
                <li>
                  Using{" "}
                  <a
                    href="https://www.manim.community"
                    className="font-bold text-purple-300"
                  >
                    Manim
                  </a>{" "}
                  to create beautiful, captivating animations about mathematical
                  concepts
                </li>

                <li>
                  Worked closely with the team developing a great sense of
                  teamwork and learning how to apply feedback to the work
                </li>

                <li>
                  More of the work I've done as a freelancer can be found in my{" "}
                  <a href="/portfolio" className="font-bold text-purple-300">
                    Portfolio
                  </a>{" "}
                  as well as my{" "}
                  <a href="/blog" className="font-bold text-purple-300">
                    Blog
                  </a>
                  , for a deeper dive on some concepts
                </li>
              </ul>
              <li className="list-item mt-10 text-2xl">
                <FontAwesomeIcon icon={faChevronRight} className="mr-3" />
                Data analyst and engineer
              </li>
              <div className="flex flex-row space-x-5">
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="mr-2 text-purple-200"
                  />
                  <span className="font-normal text-purple-200">
                    January 2021 - May 2021
                  </span>
                </div>
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="mr-1 text-purple-200"
                  />
                  <span className="font-normal text-purple-200">
                    Universidad de Jaén
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 font-blogpost">
                <li>
                  Helped shedding a light on how the concept of biodiversity is
                  understood in social media.
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

              <li className="list-item mt-10 text-2xl">
                <FontAwesomeIcon icon={faChevronRight} className="mr-3" />
                Intern data engineer
              </li>
              <div className="flex flex-row space-x-5">
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="mr-2 text-purple-200"
                  />
                  <span className="font-normal text-purple-200">
                    September 2019 - May 2020
                  </span>
                </div>
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="mr-1 text-purple-200"
                  />
                  <span className="font-normal text-purple-200">
                    Universidad de Jaén
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 font-blogpost">
                <li>
                  Assisting and learning in the process of gathering and
                  arranging data
                </li>
                <li>Built tools for client tracking and management</li>
              </ul>
            </ul>
          </div>

          <div className="mt-20">
            <div className="text-4xl mb-4 font-bold text-blue-400">
              Education
            </div>

            <ul>
              <li className="list-item mt-10 text-2xl">
                <FontAwesomeIcon icon={faChartPie} className="mr-3" />
                MSc in Data Science
              </li>
              <div className="flex flex-row space-x-5">
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="mr-2 text-blue-400"
                  />
                  <span className="font-normal text-blue-400">
                    September 2020 - Jun 2021
                  </span>
                </div>
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="mr-1 text-blue-400"
                  />
                  <span className="font-normal text-blue-400">
                    Universidad de Granada
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 font-blogpost">
                <li>
                  Thesis in NLP based transformer to generate medical comments
                  and evaluate the performance of state of the art medical-text
                  classifiers.
                </li>
                <li>GPA 8.5/10</li>
                <li>
                  Coding of advanced data mining algorithms using Python and R.
                </li>
                <li>Tidyverse, ggplot2, Spacy, Keras/Tensorflow.</li>
                <li>
                  Statistical models, regression, fuzzy logic, data mining
                  algorithms, clustering and classification.
                </li>
              </ul>

              <li className="list-item mt-10 text-2xl">
                <FontAwesomeIcon icon={faDesktop} className="mr-3" />
                BSc in Computer Science
              </li>
              <div className="flex flex-row space-x-5">
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="mr-2 text-blue-400"
                  />
                  <span className="font-normal text-blue-400">
                    September 2016 - Jun 2020
                  </span>
                </div>
                <div className="flex flex-row ml-5 items-center">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="mr-1 text-blue-400"
                  />
                  <span className="font-normal text-blue-400">
                    Universidad de Jaén
                  </span>
                </div>
              </div>
              <ul className="list-inside list-disc mt-4 ml-4 font-blogpost">
                <li>
                  Maximum grade in bachelor's thesis building a convolutional
                  autoencoder to detect anomalies in images for the WWF using
                  Tensorflow and OpenCV.
                </li>
                <li>
                  GPA of 7.5/10 and passed with honors Image Processing and Data
                  Engineering.
                </li>
                <li>
                  Data structures and Algorithms using C++ and Python,
                  Artificial Intelligence, Operating Systems.
                </li>
              </ul>
            </ul>
          </div>

          {/* <div className="text-4xl mb-4 mt-10 font-bold text-white">Skills</div> */}
        </div>
      </Layout>
    </>
  );
}
