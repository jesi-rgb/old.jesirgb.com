import { Circle } from "./Circle";
import { Line } from "./Line";

export const Timeline = ({ size, className }) => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let vb = `0 0 ${size * 2} ${size * 2}`;
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox={vb}
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
        className={className}
      >
        <Circle size="30" color="#aff7d0" />
        <Line color="#aff7d0" strokeWidth="4" size="200" />
      </svg>
    </>
  );
};
