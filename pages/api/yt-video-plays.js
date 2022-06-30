export default async (req, res) => {
  const key = process.env.YOUTUBE_PRIVATE_KEY;
  const id_collatz = "094y1Z2wpJg";
  const id_cubic = "cUzklzVXJwo";
  const id_prisoners = "iSNsgj1OCLA";

  let video_ids = ["094y1Z2wpJg", "cUzklzVXJwo", "iSNsgj1OCLA"];

  let promises = video_ids.map((id) => {
    return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" +
        id +
        "&key=" +
        key
    );
  });

  let responses = await Promise.all(promises).then((v) => v);

  let viewsArray = [];
  for (let i = 0; i < responses.length; i++) {
    let json = await responses[i].json();
    viewsArray.push(json.items[0].statistics.viewCount);
  }
  console.log(viewsArray);

  return res.status(200).json({
    viewsArray,
  });
};
