export default function Tag({ tag, color }) {
  return (
    <div
      className="border rounded-2xl text-white px-2 xl:px-3 font-bold mr-auto text-sm xl:text-md"
      style={{ backgroundColor: color }}
    >
      {tag}
    </div>
  );
}
