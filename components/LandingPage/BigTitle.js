export default function Title({ title }) {
  return (
    <div
      style={{ textShadow: "0 0 10px #AEF7D088" }}
      className="title text-white font-mono tracking-tight"
    >
      {title}
      <style jsx>{`
        .title {
          font-variation-settings: "MONO" 0, "CASL" 0.5, "wght" 900;
        }
      `}</style>
    </div>
  );
}
