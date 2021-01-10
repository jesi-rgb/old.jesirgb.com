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
      <div className="w-5/6 mx-auto border-2 p-3 rounded-lg mb-10 mt-16 md:w-96">
        <p className="text-xl text-center my-3 lg:text-2xl">
          Here's a list of my last played songs... click on them to listen!
        </p>
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </div>
    </>
  );
}
