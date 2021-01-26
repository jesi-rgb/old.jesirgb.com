import fs from "fs";
import Layout from "../../components/Layout";
import Head from "next/head";
import path from "path";
import matter from "gray-matter";
import BlogItem from "@/components/BlogItem";

export default function Blog({ slugs, titles, descriptions, dates }) {
  return (
    <>
      <Head>
        <title>Blogpost</title>
      </Head>
      <Layout>
        <div className="max-w-sm xl:max-w-2xl mx-auto">
          <div className="text-6xl xl:text-7xl font-bold text-white">Blog</div>
          <div className="text-white text-xl font-blogpost text-left my-4 mb-20">
            Developing ideas and exploring my inner self.
          </div>

          {slugs.map((slug, index) => (
            <BlogItem
              key={slug}
              slug={slug}
              title={titles[index]}
              description={descriptions[index]}
              date={dates[index]}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const files = fs.readdirSync("posts");

  const markdownMetadata = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("posts", filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);
    return parsedMarkdown.data;
  });
  return {
    props: {
      slugs: files.map((filename) => {
        return filename.replace(".md", "");
      }),
      titles: markdownMetadata.map((m) => m.title),
      descriptions: markdownMetadata.map((m) => m.description),
      dates: markdownMetadata.map((m) => m.date),
    },
  };
};
