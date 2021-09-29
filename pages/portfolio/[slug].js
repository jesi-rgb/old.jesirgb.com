import React from "react";
import fs from "fs";
import path, { parse } from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Layout from "../../components/Layout";
import PostBody from "@/components/PostBody";

import prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

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
  marked.setOptions({
    highlight: (code, lang) => {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang);
      } else {
        return code;
      }
    },
  });

  const markdownWithMetadata = fs
    .readFileSync(path.join("posts-portfolio", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  // const htmlPromise = new Promise((resolve, reject) => {
  //   marked(parsedMarkdown.content, (err, html) => {
  //     resolve(html);
  //   });
  // });

  // const htmlString = await htmlPromise;

  // const htmlString = marked(parsedMarkdown.content);
  const htmlString = marked.parse(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
