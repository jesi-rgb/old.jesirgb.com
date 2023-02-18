import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingLink({ text, link, description }) {
  return (
    <div className="group flex space-x-10 justify-between items-center transition-all duration-500">
      <div className="transform w-[40%] group-hover:text-accent-1-lighter group-hover:translate-x-10 transition-all duration-500">
        <a href={link}>{text}</a>
      </div>
      <span className="hidden mix-blend-screen leading-snug text-accent-1-lighter xl:flex pointer-events-none my-auto font-sans w-3/4 text-left text-lg mx-0 transform group-hover:translate-x-16 duration-500 opacity-0 group-hover:opacity-100 transition-all">
        {description}
      </span>
      <span className="pointer-events-none w-1/2 my-auto text-3xl transform group-hover:translate-x-28 duration-500 opacity-0 group-hover:opacity-100 transition-all">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
}
