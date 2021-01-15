import * as d3 from "d3";

export default function Landing() {
  return (
    <>
      <svg
        width="3000"
        height="2500"
        viewBox="60 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="540"
          height="540"
          viewBox="0 -5 540 529"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            style={{ "mix-blend-mode": "lighten" }}
            cx="171"
            cy="171"
            r="171"
            fill="#1ABC9C"
            id="circle-top"
          />
          <circle
            style={{ "mix-blend-mode": "lighten" }}
            cx="369"
            cy="242"
            r="171"
            fill="#9C88DD"
            id="circle-right"
          />
          <circle
            style={{ "mix-blend-mode": "lighten" }}
            cx="206"
            cy="358"
            r="171"
            fill="#0000FF"
            id="circle-bot"
          />
        </svg>
      </svg>

      <div className="absolute w-full text-white text-3xl font-light m-40 top-44">
        I am{" "}
        <h1 className="text-9xl 2xl:text-10xl m-10 font-bold font-blogpost">
          Jesús Rascón
        </h1>
        <div className="my-32 w-1/3 font-light">
          Data driven journalist, frontend developer, musician and creative.
        </div>
        <style jsx>{`
          #circle-top {
            animation-name: fill 5s infinite linear;
            @keyframes fill {
              12.5% {
                fill: #ff0000;
              }
              25% {
                fill: #ffa500;
              }
              37.5% {
                fill: #ffff00;
              }
              50% {
                fill: #7fff00;
              }
              62.5% {
                fill: #00ffff;
              }
              75% {
                fill: #0000ff;
              }
              87.5% {
                fill: #9932cc;
              }
              100% {
                fill: #ff1493;
              }
            }
          }
        `}</style>
      </div>
    </>
  );
}
