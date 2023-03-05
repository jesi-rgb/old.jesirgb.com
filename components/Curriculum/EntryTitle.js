import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EntryTitle({ title }) {
  return (
    <div className="mt-10 text-2xl font-bold font-serif">
      <FontAwesomeIcon icon={faChevronRight} className="mr-3" />
      {title}
    </div>
  );
}
