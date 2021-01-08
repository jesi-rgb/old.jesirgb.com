import Image from "next/image";

export default function Track(track) {
  return (
    <a
      href={track.songUrl}
      className="flex my-5 border-2 rounded-md border-accent-1 p-2 bg-accent-1-hover"
    >
      <Image
        alt="Spotify"
        className="rounded-full sm:hidden"
        height={60}
        width={60}
        src={track?.albumCover || "/jesi.svg"}
      />
      <div className="pl-3 align-center">
        <p className="font-bold sm:truncate text-white dark:text-gray-100 truncate w-60 sm:w-96 md:w-full">
          {track.title}
        </p>
        <p className="text-white italic mt-2 truncate w-60 sm:w-96 md:w-full">
          {track.artist}
        </p>
      </div>
    </a>
  );
}
