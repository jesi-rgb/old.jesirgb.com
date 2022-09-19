import Layout from "../../components/Layout";
import Head from "next/head";

import PortfolioItem2 from "@/components/portfolio/PortfolioItem";

export default function Blog({ slugs }) {
  let categories = [
    "Video production",
    "Graphic Design",
    "Generative Art",
    "Music",
  ];
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <div className="mx-2 xl:mx-auto xl:max-w-4xl">
          <div className="text-6xl font-display xl:text-7xl font-bold text-white xl:mx-auto xl:max-w-full">
            Portfolio
          </div>
          <div className="text-white text-xl font-blogpost text-left my-4 mb-10 xl:mx-auto xl:max-w-full">
            Take a peek at some of the works I've done so far!
          </div>

          {/* {categories.map((c) => {
          return (
            <div className="text-2xl font-display xl:text-4xl font-bold text-white mx-2 xl:mx-auto xl:max-w-full">
              {c}
            </div>
          );
        })} */}
          <div className="text-2xl font-display xl:text-4xl font-bold text-white mb-4">
            Video production
          </div>
          <PortfolioItem2
            title={"The Cubic"}
            subtitle={"Inventing imaginary numbers"}
            thumbnail={
              "https://i.ytimg.com/vi/094y1Z2wpJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO53Ianb2RhP7cAX9B83XXCGejCw"
            }
            link={"https://www.youtube.com/watch?v=GiDsjIBOVoA&t=510s"}
          />
          <PortfolioItem2
            title={"Collatz Conjecture"}
            subtitle={"Tiny little impossible problem"}
            thumbnail={"/thumbnails-portfolio/collatz-conjecture.png"}
            link={"https://www.youtube.com/watch?v=094y1Z2wpJg&t=541s"}
          />
          <PortfolioItem2
            title={"REST"}
            subtitle={"You need some rest, even from your dreams"}
            thumbnail={"/thumbnails-portfolio/rest_final.png"}
            link={"https://www.youtube.com/watch?v=094y1Z2wpJg&t=541s"}
          />
        </div>
      </Layout>
    </>
  );
}
