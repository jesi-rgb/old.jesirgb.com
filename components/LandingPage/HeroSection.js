import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCubes, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <>
      <div className="xl:w-1/2 mx-10 xl:mx-auto mt-80">
        <Image
          src="/jesi.svg"
          alt="logo for jesús rascón"
          width={32}
          height={32}
          className="opacity-40 hover:mix-blend-screen hover:opacity-100 duration-500 mix-blend-hard-light"
        />
        <h1
          style={{ textShadow: "0 0 10px #AEF7D088" }}
          className="text-8xl shadow-co md:text-9xl text-left leading-none tracking-wide mb-4 font-display font-extrabold text-white"
        >
          Jesús Enrique Rascón
        </h1>
        <div className="mb-8 mt-10 text-left leading-relaxed text-xl xl:text-2xl font-sans font-thin w-full">
          <p>
            I am a freelance animator at
            <span>
              {" "}
              <a
                className="font-bold text-accent-1-lighter hover:text-accent-1 transition-all"
                href="https://www.youtube.com/c/Reducible"
              >
                <FontAwesomeIcon icon={faCubes} /> Reducible{" "}
              </a>
            </span>
            and{" "}
            <span>
              <a
                className="font-bold text-accent-1-lighter hover:text-accent-1 transition-all"
                href="https://www.youtube.com/@Design_bits"
              >
                <span className="inline-block align-bottom mr-1 group">
                  <img
                    className="transform group-hover:rotate-12 transition-transform duration-300"
                    src="/assets/design-bits-no-ring.svg"
                    width={"30px"}
                  ></img>
                </span>
                Design Bits
              </a>
            </span>
            .
          </p>

          <p>
            Previously at{" "}
            <a
              className="font-bold text-accent-1-lighter hover:text-accent-1 transition-all"
              href="https://www.youtube.com/c/Veritasium"
            >
              Veritasium
            </a>
            .
          </p>
          <p>I am also a web developer and designer.</p>
        </div>
      </div>
      <div
        onClick={() =>
          document
            .getElementById("links")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="text-center mt-14 sm:mt-36 text-2xl animate-bounce w-10 h-10 mx-auto cursor-pointer"
      >
        <FontAwesomeIcon
          className="hover:scale-150 transform transition-all duration-500"
          icon={faArrowDown}
        />
      </div>
    </>
  );
}
