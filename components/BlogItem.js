import Date from "./Date";

export default function BlogItem({ slug, title, description, date }) {
  return (
    <a href={"/blog/" + slug}>
      <div className="link border-t border-gray-400 mb-16 font-sans text-white hover:text-accent-1-lighter">
        <div className="flex flex-row">
          <div className="font-bold mt-3 text-xl font-serif text-left align-bottom w-2/3">
            {title}
          </div>
          <div className="text-right align-bottom mt-3 w-1/3">
            <Date date={date} />
          </div>
        </div>
        <div className="text-lg mt-5 text-justify font-blogpost">
          {description}
        </div>
      </div>
    </a>
  );
}
