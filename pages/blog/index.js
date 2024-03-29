import fs from "fs";
import Layout from "../../components/Layout";
import Head from "next/head";
import matter from "gray-matter";
import BlogItem from "@/components/BlogItem";
import BigTitle from "@/components/LandingPage/BigTitle";

export default function Blog({ slugs }) {
  return (
    <>
      <Head>
        <title>Blogpost</title>
      </Head>
      <Layout>
        <div className="text-8xl">
          <BigTitle title={"Blog"} />
        </div>

        <div className="text-white text-xl font-blogpost text-left my-4 mb-20">
          Developing ideas and exploring my inner self.
        </div>
        {slugs.map((slug) => (
          <BlogItem
            key={slug.slug}
            slug={slug.slug}
            title={slug.title}
            description={slug.description}
            date={slug.date}
          />
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const path = process.cwd() + "/posts/";
  const fileNames = fs.readdirSync(path);

  const postList = fileNames.map((fileName) => {
    const filePath = path + fileName;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const result = matter(fileContent);
    return {
      slug: fileName.replace(".md", ""),
      title: result.data.title,
      description: result.data.description,
      date: result.data.date,
    };
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
