export default function BlogItem({ slug, title, description, date }) {
  return (
    <a href={"/blog/" + slug}>
      <div className="link border-t border-gray-400 mb-16 font-display text-white">
        <div className="flex flex-row max-w-sm xl:max-w-2xl">
          <div className="font-bold mt-3 text-xl text-left align-bottom w-1/2">
            {title}
          </div>
          <div className="text-right items-center italic text-sm mt-3 w-1/2 font-blogpost">
            {date}
          </div>
        </div>
        <div className="text-lg mt-5 text-justify font-blogpost">
          {description}
        </div>
      </div>
    </a>
  );
}
