export default function Tag({ tag }) {
  var color;
  if (tag == "programming") {
    color = "#0e685f";
  } else if (tag == "animation") {
    color = "#553ca5";
  } else if (tag == "design") {
    color = "#FA7921";
  } else if (tag == "data") {
    color = "#0070f3";
  } else if (tag == "veritasium") {
    color = "#0837F4";
  } else if (tag == "infographics") {
    color = "#ff5d8f";
  } else {
    color = "#666666";
  }
  return (
    <div
      className="border rounded-2xl text-white px-2 xl:px-3 font-bold mr-auto text-sm xl:text-md"
      style={{ backgroundColor: color }}
    >
      {tag}
    </div>
  );
}
