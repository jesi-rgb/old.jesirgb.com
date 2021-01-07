import React from "react";
import fs from "fs";
import path, { parse } from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Layout from "../../components/Layout";
import PostBody from "./post-body";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <PostBody content={htmlString} />
        <style jsx>
          {`
            .article {
              color: #eeeeee;
              min-height: 25vh;

              margin: 0 3em;
              margin: 0 auto;
              padding: 0 1em;
              display: grid;

              justify-content: baseline;
              text-align: justify;
              align-items: center;

              word-break: break-word;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
