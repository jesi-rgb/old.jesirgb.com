import Image from "next/image";

export default function PortfolioItem2({ workInfo }) {
  return (
    <>
      <a href={workInfo.link} className="space-y-3">
        <img src={workInfo.thumbnail} />
        <div>
          <div className="font-bold font-display text-white">
            {workInfo.title}
          </div>
          <div className="font-blogpost text-gray-400">{workInfo.subtitle}</div>
        </div>
      </a>
    </>
  );
}
