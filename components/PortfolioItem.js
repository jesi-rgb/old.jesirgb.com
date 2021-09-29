import { faJenkins } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
export default function PortfolioItem({
  slug,
  title,
  description,
  date,
  image,
  repository,
}) {
  return (
    <a href={"/portfolio/" + slug}>
      <div className="text-white rounded-md border border-gray-200 my-5 p-3 bg-opacity-40">
        <Image src={image || "/jesi.svg"} width={600} height={600} />
        <div className="font-bold my-4 text-2xl">{title}</div>
        <div className="font-blogpost mb-2">{description}</div>
        <div className="italic text-blue-100 text-opacity-60">{date}</div>
      </div>
    </a>
  );
}
