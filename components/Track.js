import Image from "next/image";

export default function Track({ track }) {
  return (
    <a
      href={track.songUrl}
      className="flex my-2 items-center p-3 hover:bg-white hover:bg-opacity-10 rounded-xl"
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
      <div className="align-left w-1/2">
        <p className="text-white font-bold truncate">{track.title}</p>
        <p className="text-white italic truncate">{track.artist}</p>
      </div>
    </a>
  );
}
