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
      <p className="mt-32 text-xl text-white my-3 lg:text-2xl">
        Recently played songs...
      </p>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3">
        {data.tracks.map((track) => (
          <Track key={track.songUrl} track={track} />
        ))}
      </div>
    </>
  );
}
