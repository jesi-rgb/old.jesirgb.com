import markdownStyles from "../pages/markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
