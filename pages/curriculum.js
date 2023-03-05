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
import SectionTitle from "@/components/Curriculum/SectionTitle";
import DateAndPlace from "@/components/Curriculum/DateAndPlace";
import EntryDetails from "@/components/Curriculum/EntryDetails";
import EntryTitle from "@/components/Curriculum/EntryTitle";

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>

      <Layout>
        <div className="mx-2 xl:mx-auto xl:max-w-2xl text-gray-300">
          <SectionTitle title="Profile" color="green" />
          <div className="text-xl">
            <p className="mb-4">
              Hi! I am Jesús, a video producer, web developer, graphic designer
              and musician.
            </p>
            <p className="mb-4">
              I really enjoy all things art, but make it digital. That's why I
              mainly focus on researching about computer graphics or
              experimenting with blend modes.
            </p>
          </div>

          <div className="mt-20">
            <SectionTitle title={"Experience"} />
            <EntryTitle
              title={
                "Google's Summer of Code Contributor, Processing Foundation"
              }
            />
            <DateAndPlace period={"July 2022 — September 2022"} />
            <EntryDetails>
              <li>
                Successful contributor for the{" "}
                <a
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                  href="https://processingfoundation.org/"
                >
                  {" "}
                  Processing Foundation
                </a>
                , building a native an easy implementation to save GIFs right
                from the{" "}
                <a
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                  href="https://p5js.org/"
                >
                  p5.js
                </a>{" "}
                library
              </li>
              <li>
                Implemented custom logic to save the GIFs in the most efficient
                way possible. You can{" "}
                <a
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                  href="https://www.jesirgb.com/blog/gif-encoding"
                >
                  read more here
                </a>
              </li>
              <li>
                Huge focus on teamwork, communication and iterative development
                through Github
              </li>
              <li>
                Check the merged{" "}
                <a
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                  href="https://github.com/processing/p5.js/pull/5709"
                >
                  {" "}
                  pull request here
                </a>
              </li>
            </EntryDetails>

            <EntryTitle
              title={"Art director and mathematical animator at Reducible"}
            />
            <DateAndPlace period={"November 2021 — Present"} />

            <EntryDetails>
              <li>
                Creation and production of insightful, computer science based
                animations and designs as part of{" "}
                <a
                  href="https://www.youtube.com/c/reducible"
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                >
                  Reducible
                </a>
                's team
              </li>
              <li>
                Using{" "}
                <a
                  href="https://www.manim.community"
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                >
                  Manim
                </a>{" "}
                to develop incredibly powerful and detailed explanations about
                CS concepts in an attractive visual way
              </li>
            </EntryDetails>

            <EntryTitle
              title={"Freelance mathematical animator at Veritasium"}
            />

            <DateAndPlace period={"Total of 3 videos"} />
            <EntryDetails>
              <li>
                Created engaging animations earning{" "}
                <strong>
                  <YoutubeViewsCount />
                </strong>{" "}
                views as part of the{" "}
                <a
                  href="https://www.youtube.com/c/veritasium"
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                >
                  Veritasium
                </a>{" "}
                Creative team
              </li>
              <li>
                Using{" "}
                <a
                  href="https://www.manim.community"
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
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
                <a
                  href="/portfolio"
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                >
                  Portfolio
                </a>{" "}
                as well as my{" "}
                <a
                  href="/blog"
                  className="font-bold text-purple-200 hover:text-purple-50 transition-all"
                >
                  Blog
                </a>
                , for a deeper dive on some concepts
              </li>
            </EntryDetails>

            <EntryTitle title={"Data analyst and engineer"} />
            <DateAndPlace
              period={"January 2021 — May 2021"}
              place="Universidad de Jaén"
            />
            <EntryDetails>
              <li>
                Helped shedding a light on how the concept of biodiversity is
                understood in social media
              </li>
              <li>Pre-processing and engineering of NLP based datasets.</li>
              <li>
                Helped supporting management's decision making regarding sales
                using ggplot2 in R
              </li>
              <li>
                Data labeling through machine learning based clustering
                algorithms, using Python, Spacy and NLTK
              </li>
            </EntryDetails>

            <EntryTitle title={"Intern data engineer"} />
            <DateAndPlace
              period={"September 2019 — May 2020"}
              place="Universidad de Jaén"
            />
            <EntryDetails>
              <li>
                Assisting and learning in the process of gathering and arranging
                data
              </li>
              <li>Built tools for client tracking and management</li>
            </EntryDetails>
          </div>

          <div className="mt-20">
            <SectionTitle title={"Education"} color="blue" />
            <div className="mt-10 text-2xl font-serif font-bold">
              <FontAwesomeIcon icon={faChartPie} className="mr-3" />
              MSc in Data Science
            </div>
            <DateAndPlace
              period={"September 2020 — Jun 2021"}
              place="Universidad de Granada"
              color="blue"
            />

            <EntryDetails>
              <li>
                Thesis in NLP based transformer to generate medical comments and
                evaluate the performance of state of the art medical-text
                classifiers
              </li>
              <li>GPA 8.5/10</li>
              <li>
                Coding of advanced data mining algorithms using Python and R
              </li>
              <li>Tidyverse, ggplot2, Spacy, Keras/Tensorflow</li>
              <li>
                Statistical models, regression, fuzzy logic, data mining
                algorithms, clustering and classification
              </li>
            </EntryDetails>

            <div className="mt-10 text-2xl font-serif font-bold">
              <FontAwesomeIcon icon={faDesktop} className="mr-3" />
              BSc in Computer Science
            </div>
            <DateAndPlace
              period={"September 2016 — Jun 2020"}
              place="Universidad de Jaén"
              color="blue"
            />

            <EntryDetails>
              <li>
                Maximum grade in bachelor's thesis building a convolutional
                autoencoder to detect anomalies in images for the WWF using
                Tensorflow and OpenCV
              </li>
              <li>
                GPA of 7.5/10 and passed with honors Image Processing and Data
                Engineering
              </li>
              <li>
                Data structures and Algorithms using C++ and Python, Artificial
                Intelligence, Operating Systems
              </li>
            </EntryDetails>
          </div>
        </div>
      </Layout>
    </>
  );
}
