import Container from "../components/container";
import Layout from "../components/Layout";
import Image from "next/image";
//max-w-2xl mx-auto
export default function About() {
  return (
    <>
      <Layout>
        <Container>
          <div className="flex text-white items-top p-6 pl-36">
            <div className="flex-none w-max relative">
              <Image
                src="/assets/jesi.jpg"
                alt="Picture of Jesús Rascón"
                width={500}
                height={700}
                className="rounded-md"
              />
            </div>
            <div className="flex-none p-6 max-w-3xl items-center">
              <p className="my-7 text-xl text-xl">
                Hi! My name is Jesús and I am an Andalusian{" "}
                <span className="text-accent-1-lighter font-bold">
                  data analyst, chart lover, designer and musician.
                </span>{" "}
                I like to explore all kinds of new disciplines and search for
                relationships between them. I am deeply fascinated by the
                process of learning and, as such, I am always exercising it so,
                hopefully, one day, I can transfer all that I know to millions
                of people.
              </p>

              <p className="my-7 text-xl">
                I studied{" "}
                <span className="text-accent-1-lighter font-bold">
                  Computer Science at the University of Jaén
                </span>{" "}
                and have a master's degree in Data Science. Telling compelling
                stories and spreading knowledge has always flowed through my
                veins, so it's only natural that I aim for doing the same, but
                on a bigger scale.
              </p>

              <p className="my-7 text-xl">
                On the topic of mixing disciplines, the data visualization and
                data journalism fields very elegantly mix some of my favourites:
                problem solving, data, graphic design and narrative. Finding
                good data to mine and process and offer a piece of valuable
                information to the world literally boils me from excitement.
              </p>

              <p className="my-7 text-xl">
                Finally, I have been studying music since 2013, when I first
                picked up guitar. Later in the process, I learned bass, keys,
                drums, and the piece that glues it all:{" "}
                <span className="text-accent-1-lighter font-bold">
                  music production.
                </span>{" "}
                I have given lots of concerts with many bands, sang lots of
                happy and sad songs and even made an album on October 2020! You
                can check me out{" "}
                <a
                  href="https://open.spotify.com/artist/2vTS6RaNCyjiF0FkQDujjy?si=YNN6ZVQSRNyTdGdrqgm5SA"
                  className="text-accent-1-lighter hover:text-accent-1-hover font-bold"
                >
                  here
                </a>{" "}
                .
              </p>

              <p className="my-7 text-xl">
                You can check me out anywhere, down in the footer. See ya!
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
