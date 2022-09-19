import Image from "next/image";

export default function PortfolioItem2({ title, subtitle, thumbnail, link }) {
  //   const img = new Blob(thumbnail);
  //   console.log(img.width);

  return (
    <>
      <a href={link}>
        <img src={thumbnail} />
        <div className="font-bold font-display text-white">{title}</div>
        <div className="font-blogpost text-gray-400">{subtitle}</div>
      </a>
    </>
  );
}
