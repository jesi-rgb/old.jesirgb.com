
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function TopTracks() {
	const { data } = useSWR("/api/top-tracks", fetcher);

	if (!data) {
		return null;
	}

	console.log(data)

	return (
		<>
			<p class="text-white mt-10">
				Last song I listened to was <a href={data.tracks[0].songUrl} class="transition-colors hover:text-accent-1-lighter font-bold">{data.tracks[0].title}</a> by <span href={data.tracks[0].songUrl} class="font-bold">{data.tracks[0].artist}</span>
			</p>
		</>
	)
}
