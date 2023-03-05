export default function SectionTitle({ color, title }) {
  return (
    <div
      className={"text-5xl mb-3 font-bold font-serif text-" + color + "-400"}
    >
      {title}
    </div>
  );
}
