import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IndexPortfolioItem({ category, icon }) {
  return (
    <a
      href={"#" + category.toLowerCase().replace(" ", "-")}
      className="group hover:bg-accent-1-hover transition-colors hover:bg-opacity-50"
    >
      <div className="px-5 py-4 h-full w-fit rounded-lg border-2 flex flex-col items-center justify-between">
        <span className="text-white group-hover:text-accent-1-lighter hover:rotate-12 transform transition-all text-5xl">
          <FontAwesomeIcon
            style={{ filter: "drop-shadow(0px 0px 4px #AEF7D088)" }}
            icon={icon}
          />
        </span>
        <span className="text-gray-100 leading-none font-display font-bold text-4xl md:text-6xl text-center group-hover:text-accent-1-lighter transition-all mt-5">
          {category}
        </span>
      </div>
    </a>
  );
}
