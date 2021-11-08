import React from "react";
import fs from "fs";
import path, { parse } from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import Layout from "../../components/Layout";
import PostBody from "@/components/PostBody";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <PostBody content={htmlString} />
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts-portfolio");

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
    .readFileSync(path.join("posts-portfolio", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked.parse(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
