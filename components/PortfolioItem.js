import Image from "next/image";
import Date from "./Date";
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
      <div className="text-white border-t-2 border-gray-300 my-5 p-3 bg-opacity-40 flex flex-shrink-0 items-center">
        <div className="w-1/4">
          <Image
            src={image || "/jesi.svg"}
            className="rounded-full"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col w-2/4">
          <div className="font-bold my-4 text-2xl">{title}</div>
          <div className="font-blogpost xl:text-xl mb-2">{description}</div>
          <Date date={date} />
          <div className="flex flex-col xl:flex-row mt-4">
            <div className="flex flex-col justify-start xl:flex xl:flex-row gap-2 xl:justify-end">
              {tags.map((tag) => {
                return <Tag tag={tag} key={tag.toString() + slug.toString()} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
