import Image from "next/image";

export default function PortfolioItem({ workInfo }) {
  return (
    <>
      <div className={workInfo.spanDoubleCol ? " lg:col-span-2" : ""}>
        <a href={workInfo.link} className="space-y-3 group">
          <img src={workInfo.thumbnail} />
          <div>
            <div className="font-bold font-serif text-white group-hover:text-accent-1-lighter transition-colors">
              {workInfo.title}
            </div>
            <div className="font-sans text-gray-400">
              {workInfo.subtitle}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
