import Link from "next/link";

export default function BlogItem({ slug }) {
  return (
    <a href={"/blog/" + slug}>
      <div className="link bg-accent-2 hover:bg-accent-2-hover transition-colors rounded-md pl-2 py-7 my-12 text-md md:text-2xl text-center text-white">
        {slug.replace(/-/g, " ").toUpperCase()}
      </div>
    </a>
  );
}
