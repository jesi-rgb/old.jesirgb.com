import React from "react";
import fs from "fs";
import path, { parse } from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import Layout from "../../components/Layout";
import PostBody from "@/components/PostBody";
import katex from "katex";

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

  const markdownWithMath = parseMath(markdownContent);
  let htmlString = marked(markdownWithMath);

  return {
    props: {
      htmlString,
      data: markdownData,
    },
  };
};

export default Post;

function parseMath(parsedMarkdownString) {
  // this gets every $
  const match = [...parsedMarkdownString.matchAll(/\$/g)];
  const matchDisplay = [...parsedMarkdownString.matchAll(/\@/g)];

  if (match.length % 2 != 0 || matchDisplay.length % 2 != 0) {
    throw SyntaxError("There is a $ or @ missing.");
  }

  // get every pair of $ indices
  const matchingPairs = match
    .map((m) => m.index)
    .reduce(function (result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);
  const matchingPairsDisplay = matchDisplay
    .map((m) => m.index)
    .reduce(function (result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);

  // extract string
  const substrings = matchingPairs.map((pair) => {
    return parsedMarkdownString.substring(pair[0] + 1, pair[1]);
  });
  const substringsDisplay = matchingPairsDisplay.map((pair) => {
    return parsedMarkdownString.substring(pair[0] + 1, pair[1]);
  });

  // process with katex
  const katexFormulas = substrings.map((f) =>
    katex.renderToString(f, { output: "mathml", displayMode: false })
  );
  const katexFormulasDisplay = substringsDisplay.map((f) =>
    katex.renderToString(f, { output: "mathml", displayMode: true })
  );

  // include in original document
  let newString = parsedMarkdownString;
  for (let i = 0; i < matchingPairs.length; i++) {
    let pair = matchingPairs[i];
    let formula = katexFormulas[i];

    let substringToReplace = parsedMarkdownString.substring(
      pair[0] + 1,
      pair[1]
    );
    newString = newString.replace(substringToReplace, formula);
  }
  for (let i = 0; i < matchingPairsDisplay.length; i++) {
    let pair = matchingPairsDisplay[i];
    let formula = katexFormulasDisplay[i];

    let substringToReplace = parsedMarkdownString.substring(
      pair[0] + 1,
      pair[1]
    );
    newString = newString.replace(substringToReplace, formula);
  }
  newString = newString.replaceAll("$", "");
  newString = newString.replaceAll("@", "");

  return newString;
}
