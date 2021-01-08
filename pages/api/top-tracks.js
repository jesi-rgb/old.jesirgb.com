import { getRecentlyPlayed, getTopTracks } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  console.log(items[0].track.artists);
  const tracks = items.slice(0, 10).map((item) => ({
    artist: item.track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: item.track.external_urls.spotify,
    title: item.track.name,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  return res.status(200).json({ tracks });
};
