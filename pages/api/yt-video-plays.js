export default async (req, res) => {
  const key = process.env.YOUTUBE_PRIVATE_KEY;
  const id_collatz = "094y1Z2wpJg";
  const id_cubic = "cUzklzVXJwo";

  const response_collatz = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" +
      id_collatz +
      "&key=" +
      key
  );

  const response_cubic = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" +
      id_cubic +
      "&key=" +
      key
  );

  const jsonCollatz = await response_collatz.json();
  const jsonCubic = await response_cubic.json();

  const viewCountCollatz = jsonCollatz.items[0].statistics.viewCount;

  const viewCountCubic = jsonCubic.items[0].statistics.viewCount;

  return res.status(200).json({
    viewCountCollatz,
    viewCountCubic,
  });
};
