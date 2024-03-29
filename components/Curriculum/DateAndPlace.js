import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DateAndPlace({ period, place = "Remote" }) {
  return (
    <>
      <div
        className={
          "ml-4 flex flex-col md:flex-row mt-3 font-mono text-sm bg-accent-1-hover bg-opacity-30 ring-2 ring-accent-1-lighter ring-opacity-70 rounded-xl px-3 py-1 w-max space-y-2 md:space-y-0 md:items-center md:space-x-5"
        }
      >
        <div>
          <FontAwesomeIcon
            icon={faCalendar}
            className={"mr-2 text-accent-1-lighter"}
          />
          <span className={"font-normal text-accent-1-lighter"}>{period}</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLocationArrow}
            className={"mr-2 text-accent-1-lighter"}
          />
          <span className={"font-normal text-accent-1-lighter"}>{place}</span>
        </div>
      </div>
    </>
  );
}
