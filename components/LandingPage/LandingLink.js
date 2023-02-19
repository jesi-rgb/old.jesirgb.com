import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingLink({ text, link, description }) {
  return (
    <a href={link}>
      <div className="text-white text-left text-8xl xl:text-9xl font-display md:w-1/2 mx-10 md:mx-auto">
        <div className="group w-[50%] flex space-x-2 xl:space-x-10 items-center transition-all duration-500">
          <div
            style={{ textShadow: "0 0 10px #AEF7D088" }}
            className="transform w-3/4 xl:w-[40%] group-hover:text-accent-1-lighter group-hover:translate-x-10 transition-all duration-500"
          >
            {text}
          </div>
          <span className="hidden mix-blend-screen self-start leading-snug text-accent-1-lighter xl:flex pointer-events-none my-auto font-sans w-3/4 text-left text-sm md:text-lg mx-0 transform group-hover:translate-x-16 duration-500 opacity-0 group-hover:opacity-100 transition-all">
            {description}
          </span>
          <span className="text-right my-auto text-3xl transform group-hover:translate-x-10 xl:group-hover:translate-x-20 duration-500 opacity-0 group-hover:opacity-100 transition-all">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </a>
  );
}
