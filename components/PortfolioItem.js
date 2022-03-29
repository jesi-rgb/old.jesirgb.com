import Image from "next/image";
import Link from "next/link";
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
    <Link href={"/portfolio/" + slug}>
      <div className="text-white border-t border-gray-400 my-5 p-3 bg-opacity-40 flex flex-col xl:flex-row xl:flex-shrink-0 xl:items-center hover:text-accent-1-lighter ">
        <div className="xl:w-1/4">
          <Image
            src={image || "/jesi.svg"}
            className="rounded-full transform scale-75 xl:scale-100"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col xl:w-2/4">
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
    </Link>
  );
}
