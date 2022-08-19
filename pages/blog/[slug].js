import React from "react";
import fs from "fs";
import path, { parse } from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import Layout from "../../components/Layout";
import PostBody from "@/components/PostBody";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Post = ({ htmlString, data }) => {
  let config = {
    tex: {
      inlineMath: [["$", "$"]],
    },
  };
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <MathJaxContext config={config}>
          <MathJax>
            <PostBody content={htmlString} />
          </MathJax>
        </MathJaxContext>
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

  const matteredMD = matter(markdownWithMetadata);
  const markdownContent = matteredMD.content;
  const markdownData = matteredMD.data;

  //   const markdownWithMath = parseMath(markdownContent);
  let htmlString = marked(markdownContent);

  return {
    props: {
      htmlString,
      data: markdownData,
    },
  };
};

export default Post;
