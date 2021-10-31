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
      <div className="w-5/6 mx-auto mb-10 mt-16 md:w-96">
        <p className="text-xl text-white my-3 lg:text-2xl">
          Recently played...
        </p>
        {data.tracks.map((track) => (
          <Track key={track.songUrl} track={track} />
        ))}
      </div>
    </>
  );
}
