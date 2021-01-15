import * as d3 from "d3";

export default function Landing() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="70 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="78" width="627" height="1219" fill="#242424" />
        <circle
          cx="371.5"
          cy="314.5"
          r="77.5"
          fill="#C4A8FF"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="465.5"
          cy="263.5"
          r="33.5"
          fill="#EEFFA8"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="497.5"
          cy="350.5"
          r="33.5"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="546"
          cy="455"
          r="4"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="453"
          cy="441"
          r="4"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="554"
          cy="412"
          r="4"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="461"
          cy="398"
          r="4"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="514"
          cy="459"
          r="4"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="522"
          cy="416"
          r="4"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="495"
          cy="420"
          r="15"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="432.5"
          cy="399.5"
          r="7.5"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="452"
          cy="372"
          r="12"
          fill="#5055DD"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
        <circle
          cx="249"
          cy="180"
          r="171"
          fill="#1ABC9C"
          fill-opacity="0.4"
          style={{ "mix-blend-mode": "lighten" }}
        />
      </svg>

      <div className="absolute text-white text-3xl font-light m-40 top-1 z-10">
        I am{" "}
        <h1 className="text-9xl 2xl:text-10xl m-10 font-bold font-blogpost">
          Jesús Rascón
        </h1>
        <div className="my-32 w-1/3 font-light">
          Data driven journalist, frontend developer, musician and creative.
        </div>
      </div>
    </>
  );
}
