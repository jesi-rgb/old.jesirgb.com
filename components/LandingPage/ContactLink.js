import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactLink({ icon, link }) {
  return (
    <div className="cursor-pointer hover:text-accent-1-lighter transition-colors duration-500 ">
      <Link href={link}>
        <FontAwesomeIcon
          icon={icon}
          className="transform hover:scale-110 hover:rotate-6 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}
