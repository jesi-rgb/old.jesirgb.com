import Image from "next/image";

export default function Track(track) {
  return (
    <a
      href={track.songUrl}
      className="flex my-5 border-2 rounded-md border-accent-1 p-2 bg-accent-1-hover hover:bg-accent-1 transition-colors"
    >
      <Image
        alt="Spotify"
        className="rounded-md"
        height={60}
        width={60}
        src={track?.albumCover || "/jesi.svg"}
      />
      <div className="pl-4 align-center">
        <p className="font-bold text-white truncate w-60">{track.title}</p>
        <p className="text-white italic mt-2 truncate w-60">{track.artist}</p>
      </div>
    </a>
  );
}
