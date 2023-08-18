import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IndexPortfolioItem({ category, icon }) {
  return (
    <a
      href={"#" + category.toLowerCase().replace(" ", "-")}
      className="group hover:bg-accent-1-hover rounded-xl hover:bg-opacity-50 hover:-translate-y-1 transform transition-all duration-500"
    >
      <div className="px-5 py-4 h-full w-fit rounded-xl border-2 flex flex-col items-center justify-between">
        <span className="text-white group-hover:text-accent-1-lighter hover:rotate-12 transform transition-all text-5xl">
          <FontAwesomeIcon
            style={{
              filter:
                "drop-shadow(0px 0px 4px #AEF7D088) drop-shadow(2px 2px 0px #AEF7D066)",
            }}
            icon={icon}
          />
        </span>
        <span className="text-gray-100 leading-none font-mono text-xl md:text-3xl font-bold text-center group-hover:text-accent-1-lighter transition-all mt-5">
          {category}
        </span>
      </div>
    </a>
  );
}
