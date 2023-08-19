import useAnimateNumber from "use-animate-number";

export default function Title({ title }) {
  const [weight, setWeight] = useAnimateNumber(500, { duration: 400 });

  return (
    <div
      style={{ textShadow: "0 0 10px #AEF7D088" }}
      onMouseOver={() => setWeight(1000)}
      onMouseLeave={() => setWeight(500)}
      className="title text-white font-mono tracking-tight"
    >
      {title}
      <style jsx>{`
        .title {
          font-variation-settings: "MONO" 0, "CASL" ${weight / 1000},
            "wght" ${weight};
        }
      `}</style>
    </div>
  );
}
