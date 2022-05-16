import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import Track from "./Track";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="mx-2 xl:mx-0">
        <p className="mt-9 text-lg text-white my-3 lg:text-xl">
          Recently played songs...
        </p>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-3">
          {data.tracks.map((track) => (
            <Track key={track.songUrl} track={track} />
          ))}
        </div>
      </div>
    </>
  );
}
