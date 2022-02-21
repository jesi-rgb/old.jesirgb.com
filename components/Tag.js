export default function Tag({ tag }) {
  //   var color;
  //   if (tag == "programming") {
  //     color = "#0e685f";
  //   } else if (tag == "animation") {
  //     color = "#553ca5";
  //   } else if (tag == "design") {
  //     color = "#FA7921";
  //   } else if (tag == "data") {
  //     color = "#0070f3";
  //   } else if (tag == "veritasium") {
  //     color = "#0837F4";
  //   } else if (tag == "infographics") {
  //     color = "#ff5d8f";
  //   } else {
  //     color = "#666666";
  //   }
  return (
    <span className="text-white text-opacity-50 mr-auto text-sm xl:text-md">
      {"#" + tag}
    </span>
  );
}
