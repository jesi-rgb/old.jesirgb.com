// export const Circle = ({ className, color, size }) => {
//   let vb = `0 0 ${size * 2} ${size * 2}`;
//   return (
//     <>
//       <div className="flex flex-row">
//         <svg
//           width={size}
//           height={size}
//           viewBox={vb}
//           fill="none"
//           xmlns="https://www.w3.org/2000/svg"
//           className={className}
//         >
//           <circle cx={size} cy={size} r={size} fill={color} />
//         </svg>
//       </div>
//     </>
//   );
// };
export const Circle = ({ color, size }) => {
  return <circle cx={size} cy={size} r={size} fill={color} />;
};
