import Image from "next/image";
import Tag from "./Tag";
export default function PortfolioItem({
  slug,
  title,
  description,
  date,
  image,
  tags,
}) {
  return (
    <a href={"/portfolio/" + slug}>
      <div className="text-white rounded-md border-2 border-gray-300 my-5 p-3 bg-opacity-40">
        <div className="border-2 border-white rounded-sm">
          <Image
            src={image || "/jesi.svg"}
            className="border-2 border-gray-50"
            width={600}
            height={600}
          />
        </div>
        <div className="font-bold my-4 text-2xl">{title}</div>
        <div className="font-blogpost xl:text-sm mb-2">{description}</div>
        <div className="flex flex-col xl:flex-row">
          <div className="italic text-blue-100 text-opacity-60 mb-4 xl:mb-0 xl:w-2/3">
            {date}
          </div>
          <div className="flex flex-col justify-start xl:w-1/3 xl:flex xl:flex-row gap-2 xl:justify-end">
            {tags.map((tag) => {
              return <Tag tag={tag} />;
            })}
          </div>
        </div>
      </div>
    </a>
  );
}
