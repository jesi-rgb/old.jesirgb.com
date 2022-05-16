import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LandingButton({ link, icon, text }) {
  return (
    <>
      <a href={link}>
        <button className="text-accent-1-lighter w-full bg-accent-1 bg-opacity-20 border-0 border-accent-1 py-3 px-6 focus:outline-none hover:bg-opacity-50 rounded text-lg">
          <FontAwesomeIcon icon={icon} className="text-lg mr-3" /> {text}
        </button>
      </a>
    </>
  );
}
