import Layout from "../components/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import Link from "next/link";

//max-w-2xl mx-auto
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <div className="flex xl:space-x-9 flex-col xl:flex-row xl:object-top items-center xl:items-start text-white font-blogpost">
          <div className="mx-5 mb-10 justify-center md:w-2/4">
            <Image
              src="/assets/jesi.jpg"
              alt="Picture of Jesús Rascón"
              width={500}
              height={700}
              className="rounded-lg"
            />

            <figcaption className="italic row-auto text-sm my-3">
              Credits: © Alex Catena
              <Link href="https://www.instagram.com/alexcatena">
                <a>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="transform scale-150 mx-3 align-center hover:text-accent-1 transition-colors"
                  />
                </a>
              </Link>
            </figcaption>
          </div>

          <div className="flex-col text-lg items-top xl:text-xl space-y-9 mx-5 xl:mx-0 md:w-2/4 text-justify">
            <p>
              Hi! My name is Jesús and I am an Andalusian{" "}
              <span className="text-accent-1-lighter font-bold">
                data journalist, chart lover, designer and musician.
              </span>{" "}
              I like to explore all kinds of new disciplines and search for
              relationships between them. I am deeply fascinated by the process
              of learning and, as such, I am always exercising it so, hopefully,
              one day, I can transfer all that I know to millions of people.
            </p>

            <p>
              I studied{" "}
              <span className="text-accent-1-lighter font-bold">
                Computer Science at the University of Jaén
              </span>{" "}
              and have a{" "}
              <span className="text-accent-1-lighter font-bold">
                Master's in Data Science by the University of Granada
              </span>
              {""}. Telling compelling stories and spreading knowledge has
              always flowed through my veins, so it's only natural that I aim
              for doing the same, but on a bigger scale.
            </p>

            <p>
              On the topic of mixing disciplines, the data visualization and
              data journalism fields very elegantly mix some of my favourites:{" "}
              <span className="text-accent-1-lighter font-bold">
                problem solving, data, graphic design and narrative.
              </span>{" "}
              Finding good data to mine and process and offer a piece of
              valuable information to the world literally boils me from
              excitement.
            </p>

            <p>
              Finally, I have been studying music since 2013, when I first
              picked up guitar. Later in the process, I learned bass, keys,
              drums, and the piece that glues it all:{" "}
              <span className="text-accent-1-lighter font-bold">
                music production.
              </span>{" "}
              I have given lots of concerts with many bands, sang lots of happy
              and sad songs and even made an album on October 2020! You can
              check me out{" "}
              <a
                href="https://open.spotify.com/artist/2vTS6RaNCyjiF0FkQDujjy?si=YNN6ZVQSRNyTdGdrqgm5SA"
                className="text-accent-1-lighter hover:text-accent-1-hover font-bold"
              >
                here
              </a>
              .
            </p>

            <p>Follow me anywhere, links down in the footer. See ya!</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
