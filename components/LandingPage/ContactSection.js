import {
  faGithub,
  faLinkedin,
  faTelegram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCubes,
  faArrowDown,
  faAt,
  faVoicemail,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <>
      <div
        style={{ textShadow: "0 0 10px #AEF7D088" }}
        className="mt-96 text-center text-9xl text-white font-display font-bold"
      >
        Contact
      </div>
      <div className="font-sans w-96 mx-auto text-accent-1-lighter text-xl text-center mb-10 xl:mb-20">
        Find me at these places. Unfortunately, I am an extremely online person,
        so you'll probably get quick response.
      </div>
      <div className="flex flex-col md:flex-row md:mx-40 xl:mx-96 text-center text-white text-6xl space-y-3 md:space-y-0 md:text-7xl justify-evenly">
        <ContactLink
          link={"https://www.linkedin.com/in/jesi-rgb/"}
          icon={faLinkedin}
        />
        <ContactLink link={"https://github.com/jesi-rgb"} icon={faGithub} />
        <ContactLink link={"https://twitter.com/jesi_rgb"} icon={faTwitter} />
        <ContactLink link={"mailto:blograso@gmail.com"} icon={faEnvelope} />
        <ContactLink link={"https://t.me/jrascon"} icon={faTelegram} />
      </div>
    </>
  );
}
