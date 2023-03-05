import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DateAndPlace({
  period,
  place = "Remote",
  color = "purple",
}) {
  return (
    <>
      <div
        className={
          "mt-3 font-mono text-sm bg-" +
          color +
          "-900 bg-opacity-20 ring-2 ring-" +
          color +
          "-500 ring-opacity-70 rounded-xl px-4 py-1 w-max flex flex-row items-center space-x-5"
        }
      >
        <div>
          <FontAwesomeIcon
            icon={faCalendar}
            className={"mr-2 text-" + color + "-400"}
          />
          <span className={"font-normal text-" + color + "-100"}>{period}</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLocationArrow}
            className={"mr-2 text-" + color + "-400"}
          />
          <span className={"font-normal text-" + color + "-100"}>{place}</span>
        </div>
      </div>
    </>
  );
}
