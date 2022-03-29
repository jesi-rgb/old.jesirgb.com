import Image from "next/image";
import Date from "./Date";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PinnedPortfolioItem({ slug, title, date, image }) {
  return (
    <Link href={"/portfolio/" + slug}>
      <div className="relative flex w-max flex-shrink-0 py-3 px-5 items-center align-middle text-sm border border-accent-1-lighter border-opacity-30 rounded-xl">
        <span className="absolute bottom-1 right-1 bg-accent-1-hover py-0 px-1.5 rounded-full">
          <FontAwesomeIcon
            className="text-accent-1-lighter transform scale-75"
            icon={faThumbtack}
          />
        </span>
        <div className="">
          <Image
            src={image || "/jesi.svg"}
            className="rounded-full"
            width={50}
            height={50}
          />
        </div>

        <div className="flex flex-col ml-4">
          <div className="font-bold text-sm text-white">{title}</div>
          <Date date={date} />
        </div>
      </div>
    </Link>
  );
}
