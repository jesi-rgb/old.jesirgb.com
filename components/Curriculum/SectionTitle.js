export default function SectionTitle({ title }) {
  return (
    <div
      className={
        "title text-6xl mb-3 font-mono font-bold text-accent-1-lighter"
      }
    >
      {title}
      <style jsx>{`
        .title {
          font-variation-settings: "MONO" 0, "CASL" 0.9, "wght" 900;
        }
      `}</style>
    </div>
  );
}
