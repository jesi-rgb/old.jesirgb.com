import Link from "next/link";
import fs from "fs";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home({ slugs }) {
  return (
    <Layout>
      <div className="container">
        <div className="link-list">
          {slugs.map((slug) => {
            return (
              <div key={slug} className="link">
                <Link href="/blog/[slug]" as={"/blog/" + slug}>
                  <a>{slug.replace(/-/g, " ").toUpperCase()}</a>
                </Link>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          .container {
            min-height: 25vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            margin-bottom: 1em;
            background-color: black;
            color: white;
            width: 100%;
            text-align: center;
            border-radius: 20px;
          }
          .link {
            padding: 1em;
            margin: 1em;
            background-color: #b98ea7;
            color: white;
            text-align: center;
            align-items: center;
            font-size: 30px;
            border-radius: 20px;
          }
          .link:hover {
            background-color: #744d63;
            transition: 400ms;
            transition-timing-function: ease;
          }
        `}</style>
      </div>
    </Layout>
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
