import Link from "next/link";
import fs from "fs";
import Layout from "../../components/Layout";
import BlogIndexBody from "./blog-index-body";
import Head from "next/head";

export default function Blog({ slugs }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <div className="max-w-sm xl:max-w-xl mx-auto">
          {slugs.map((slug) => {
            return (
              <Link href="/blog/[slug]" as={"/blog/" + slug}>
                <a>
                  <div
                    key={slug}
                    className="link bg-accent-2 hover:bg-accent-2-hover transition-colors rounded-md pl-2 py-7 my-12 text-md md:text-2xl text-center text-white"
                  >
                    {slug.replace(/-/g, " ").toUpperCase()}
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
