import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <>
      <p class="text-white mt-10">
        <FontAwesomeIcon icon={faSpotify} />{" "}
        <a
          href={data.tracks[0].songUrl}
          class="transition-colors hover:text-accent-1-lighter font-thin"
        >
          <span className="font-bold"> {data.tracks[0].title}</span> by{" "}
          <span href={data.tracks[0].songUrl} class="font-thin">
            {data.tracks[0].artist}
          </span>
        </a>
      </p>
    </>
  );
}
