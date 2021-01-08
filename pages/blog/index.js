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
        <BlogIndexBody>
          <div className="link-list max-w-screen-2xl">
            {slugs.map((slug) => {
              return (
                <Link href="/blog/[slug]" as={"/blog/" + slug}>
                  <a>
                    <div
                      key={slug}
                      className="link bg-accent-2 hover:bg-accent-2-hover transition-colors rounded-md pl-2 py-7 my-16 text-2xl text-center text-white"
                    >
                      {slug.replace(/-/g, " ").toUpperCase()}
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </BlogIndexBody>
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
