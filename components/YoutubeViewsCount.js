import useSWR from "swr";

import fetcher from "@/lib/fetcher";

export default function YoutubeViewsCount() {
  const { data } = useSWR("/api/yt-video-plays", fetcher);

  if (!data) {
    return null;
  }

  var totalViews =
    parseInt(data.viewCountCollatz) + parseInt(data.viewCountCubic);

  console.log(totalViews);

  var numStr = (totalViews / 1000000).toFixed(2) + "M";

  return (
    <>
      <span>{numStr}</span>
    </>
  );
}
