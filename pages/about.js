import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import LastTrack from "components/LastTrack";
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
        <div className="flex flex-col mx-auto items-center text-white font-blogpost">
          <div className="mb-10 justify-center">
            <img
              src="/assets/jesi.jpg"
              alt="Picture of Jesús Rascón"
              width={400}
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

          <div className="flex-col text-lg items-top xl:text-lg space-y-9 text-justify">
            <p>
              Hi! My name is Jesús and I am an Andalusian{" "}
              <span className="text-accent-1-lighter font-bold">
                mathematical animator, data scientist, designer and musician.
              </span>{" "}
              I like to explore all kinds of new disciplines and search for
              relationships between them. I am deeply fascinated by the process
              of learning and my main goal in life is to return to the internet
              what the internet gave me.
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
              {""}.
            </p>

            <p>
              On the topic of mixing disciplines, the data visualization and
              science communication fields very elegantly mix some of my
              favourites:{" "}
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
              and sad songs and even made an album! You can check me out{" "}
              <a
                href="https://open.spotify.com/artist/2vTS6RaNCyjiF0FkQDujjy?si=YNN6ZVQSRNyTdGdrqgm5SA"
                className="text-accent-1-lighter underline hover:text-accent-1-hover font-bold"
              >
                here
              </a>
              .
            </p>

            <p>Follow me anywhere, links down in the footer. See ya!</p>
            <LastTrack />
          </div>
        </div>
      </Layout>
    </>
  );
}
