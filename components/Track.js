import Image from "next/image";

export default function Track(track) {
  return (
    <a
      href={track.songUrl}
      className="flex my-5 border-2 items-center rounded-md border-accent-1 p-2 bg-accent-1-hover hover:bg-accent-1 transition-colors"
    >
      <div className="flex mr-2">
        <Image
          alt="Spotify"
          className="rounded-md"
          height={60}
          width={60}
          src={track?.albumCover || "/jesi.svg"}
        />
      </div>
      <div className="align-left w-9/12">
        <p className="text-white font-bold truncate">{track.title}</p>
        <p className="text-white italic truncate">{track.artist}</p>
      </div>
    </a>
  );
}
