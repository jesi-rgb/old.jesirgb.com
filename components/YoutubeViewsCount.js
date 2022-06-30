import useSWR from "swr";

import fetcher from "@/lib/fetcher";

export default function YoutubeViewsCount() {
  const { data } = useSWR("/api/yt-video-plays", fetcher); // an array of numbers
  //   const { data } = fetch("/api/yt-video-plays");

  if (!data) {
    return null;
  }

  var totalViews = 0;
  data.viewsArray.map((v) => (totalViews += parseInt(v)));

  var numStr = (totalViews / 1000000).toFixed(2) + "M";

  return (
    <>
      <span>{numStr}</span>
    </>
  );
}
