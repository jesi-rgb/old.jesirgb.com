// export const Line = ({ className, color, size, strokeWidth }) => {
//   let vb = `0 0 ${size} ${size}`;
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox={vb}
//       fill="none"
//       xmlns="https://www.w3.org/2000/svg"
//       className={className}
//     >
//       <line
//         x1={size / 2}
//         y1={0}
//         x2={size / 2}
//         y2={size}
//         stroke={color}
//         strokeWidth={strokeWidth}
//       />
//     </svg>
//   );
// };
export const Line = ({ className, color, size, strokeWidth }) => {
  //   let vb = `0 0 ${size} ${size}`;
  return (
    <line
      x1={size / 2}
      y1={0}
      x2={size / 2}
      y2={size}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  );
};
