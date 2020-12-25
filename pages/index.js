import Link from "next/link";
import fs from "fs";
import styles from "../styles/Home.module.css";

export default function Home({ slugs }) {
  return (
    <div class={styles.container}>
      <div class={styles.title}>FUCK YES</div>
      <div class="link-list">
        {slugs.map((slug) => {
          return (
            <div key={slug} class="link">
              <Link href={"/blog/" + slug}>
                <a>&gt; Go to {slug}</a>
              </Link>
            </div>
          );
        })}
      </div>

      {/* <style jsx global>{`
        .container,
        .link-list {
          margin: 100px;
        }
        div {
          color: blue;
        }
      `}</style> */}
    </div>
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
