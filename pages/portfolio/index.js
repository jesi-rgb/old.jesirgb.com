import fs from "fs";
import Layout from "../../components/Layout";
import Head from "next/head";
import matter from "gray-matter";
import PortfolioItem from "@/components/PortfolioItem";

export default function Blog({ slugs }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <div className="text-6xl xl:text-7xl font-bold text-white mx-2 xl:mx-auto xl:max-w-full">
          Portfolio
        </div>
        <div className="text-white text-xl font-blogpost text-left my-4 mb-20 mx-2 xl:mx-auto xl:max-w-full">
          Take a peek at some of the works I've done so far!
        </div>
        <div className="mx-2 xl:grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-3 xl:gap-8 xl:mx-auto xl:max-w-full">
          {slugs.map((slug) => (
            <PortfolioItem
              key={slug}
              slug={slug.slug}
              title={slug.title}
              description={slug.description}
              date={slug.date}
              image={slug.image}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const portfolioPath = process.cwd() + "/posts-portfolio/";
  const projectsPaths = fs.readdirSync(portfolioPath);

  const postList = projectsPaths.map((project) => {
    const file = portfolioPath + project;

    let processedPostContent = matter(fs.readFileSync(file, "utf-8"));

    let postAndImage = {};
    postAndImage.title = processedPostContent.data.title;
    postAndImage.description = processedPostContent.data.description;
    postAndImage.date = processedPostContent.data.date;
    postAndImage.slug = project.replace(".md", "");
    postAndImage.image =
      "/thumbnails-portfolio/" + project.replace(".md", "") + ".png";

    console.log(postAndImage);
    return postAndImage;
  });

  return {
    props: {
      slugs: postList.sort((a, b) => {
        const a_day = a.date.split("/")[0];
        const a_month = a.date.split("/")[1];
        const a_year = a.date.split("/")[2];

        const b_day = b.date.split("/")[0];
        const b_month = b.date.split("/")[1];
        const b_year = b.date.split("/")[2];

        const aDate = new Date(a_year, a_month, a_day);
        const bDate = new Date(b_year, b_month, b_day);

        return aDate < bDate ? 1 : -1;
      }),
    },
  };
};
