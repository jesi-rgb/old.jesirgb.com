import fs from "fs";
import Layout from "../../components/Layout";
import Head from "next/head";
import BlogItem from "@/components/BlogItem";

export default function Blog({ slugs }) {
  return (
    <>
      <Head>
        <title>Blogpost</title>
      </Head>
      <Layout>
        <div className="max-w-sm xl:max-w-xl mx-auto">
          {slugs.map((slug) => (
            <BlogItem key={slug} slug={slug} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
