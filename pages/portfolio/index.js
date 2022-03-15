import fs from "fs";
import Layout from "../../components/Layout";
import Head from "next/head";
import matter from "gray-matter";
import PortfolioItem from "@/components/PortfolioItem";
import PinnedPortfolioItem from "@/components/PinnedPortfolioItem";

export default function Blog({ slugs }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <div className="mx-2 xl:mx-auto xl:max-w-4xl">
          <div className="text-6xl xl:text-7xl font-bold text-white mx-2 xl:mx-auto xl:max-w-full">
            Portfolio
          </div>
          <div className="text-white text-xl font-blogpost text-left my-4 mb-10 mx-2 xl:mx-auto xl:max-w-full">
            Take a peek at some of the works I've done so far!
          </div>

          <div
            id="pinned"
            className="flex scrollbar-hide overflow-y-visible overflow-x-auto space-x-6 mb-14 mx-2 items-center"
          >
            {slugs.map((slug) => {
              if (slug.pinned) {
                return (
                  <PinnedPortfolioItem
                    key={slug.slug + "pinned"}
                    slug={slug.slug}
                    title={slug.title}
                    description={slug.description}
                    date={slug.date}
                    image={slug.image}
                    tags={slug.tags}
                  />
                );
              }
            })}
          </div>
          <div className="mx-2 xl:mx-auto xl:max-w-full">
            {slugs.map((slug) => (
              <PortfolioItem
                key={slug.slug}
                slug={slug.slug}
                title={slug.title}
                description={slug.description}
                date={slug.date}
                image={slug.image}
                tags={slug.tags}
              />
            ))}
          </div>
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

    let tags = processedPostContent.data.tags.split(", ");

    postAndImage.pinned = processedPostContent.data.pinned ? true : false;

    postAndImage.tags = tags;

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
