import Image from "next/image";

export default function Track({ track }) {
  return (
    <div className="hover:bg-white hover:bg-opacity-10 rounded-xl">
      <a
        href={track.songUrl}
        className="flex w-max flex-shrink-0 py-3 px-5 xl:py-5 xl:px-8 items-center align-middle text-sm"
      >
        <div className="mr-4">
          <Image
            alt="Spotify"
            className="rounded-full"
            height={50}
            width={50}
            src={track?.albumCover || "/jesi.svg"}
          />
        </div>
        <div className="align-left">
          <p className="text-white font-bold">{track.title}</p>
          <p className="text-white italic">{track.artist}</p>
        </div>
      </a>
    </div>
  );
}
