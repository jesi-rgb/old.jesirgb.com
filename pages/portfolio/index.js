import Layout from "../../components/Layout";
import Head from "next/head";

import PortfolioItem2 from "@/components/portfolio/PortfolioItem";

export default function Blog() {
  let works = [
    {
      category: "Graphic design",
      subtitle: "Some of my adventures pretending I'm a graphic designer",
      works: [
        {
          title: "Circle Study Wallpaper set",
          subtitle: "Making circles for my screen",
          thumbnail: "/thumbnails-portfolio/circle-study-wp.png",
          link: "https://jesirgb.gumroad.com/l/circle-study-wallpapers",
          spanDoubleCol: true,
        },
        {
          title: "Orion Logo",
          subtitle: "Redesigning Orion's logo just for fun",
          thumbnail: "/thumbnails-portfolio/orion-logo.jpg",
          link: "https://twitter.com/jesi_rgb/status/1568197841012531200",
          spanDoubleCol: true,
        },
        {
          title: "REST",
          subtitle: "You need some rest, even from your dreams",
          thumbnail: "/thumbnails-portfolio/REST_final.png",
          link: "/thumbnails-portfolio/REST_final.png",
        },
        {
          title: "LIFETIME",
          subtitle: "Learning about yourself only takes a lifetime",
          thumbnail: "/thumbnails-portfolio/lifetime_final.png",
          link: "/thumbnails-portfolio/lifetime_final.png",
        },
        {
          title: "NO",
          subtitle: "Sometimes it's hard to say no",
          thumbnail: "/thumbnails-portfolio/no-coldtype.jpg",
          link: "/thumbnails-portfolio/no-coldtype.jpg",
        },
        {
          title: "English vs Spanish in Kali Uchis' Sin Miedo",
          subtitle:
            "Getting some sense of how the two languages are used on her album",
          thumbnail:
            "/portfolio-images/analysis-sin-miedo/analysis-sin-miedo.jpg",
          link: "https://twitter.com/jesi_rgb/status/1426575462315307010",
        },
        {
          title: "Coldtyping",
          subtitle: "Having fun with this awesome library",
          thumbnail: "/portfolio-images/coldtype/emberly_sm.gif",
          link: "https://coldtype.xyz/",
          spanDoubleCol: true,
        },
        {
          title: "Coldtyping",
          subtitle: "Having fun with this awesome library",
          thumbnail: "/portfolio-images/coldtype/ancho.gif",
          link: "https://coldtype.xyz/",
        },
        {
          title: "Coldtyping",
          subtitle: "Having fun with this awesome library",
          thumbnail: "/portfolio-images/coldtype/tourney.gif",
          link: "https://coldtype.xyz/",
        },
      ],
    },

    {
      category: "Video production",
      subtitle:
        "This category includes all the video work I've participated on, either co-producing from scratch or adding some small details",
      works: [
        {
          title:
            "The Traveling Salesman Problem: when good enough beats perfect",
          subtitle: "Search engines explained",
          thumbnail:
            "https://i.ytimg.com/vi/GiDsjIBOVoA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCl3wLO7Ak-DcE436vfRkK7sG6rTw",
          link: "https://www.youtube.com/watch?v=GiDsjIBOVoA",
          category: "Video production",
        },
        {
          title: "PageRank: A trillion dollar algorithm",
          subtitle: "Search engines explained",
          thumbnail:
            "https://i.ytimg.com/vi/JGQe4kiPnrU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAY0MpvUKnmi9whJq4FSIrFEH451A",
          link: "https://www.youtube.com/watch?v=JGQe4kiPnrU",
          category: "Video production",
        },
        {
          title: "How PNG Works: Compromising speed for quality",
          subtitle: "PNG is not perfect tho!",
          thumbnail:
            "https://i.ytimg.com/vi/EFUYNoFRHQI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB44R9WPwmlmmKVuRUa90vV_ZDusQ",
          link: "https://www.youtube.com/watch?v=EFUYNoFRHQI",
          category: "Video production",
        },
        {
          title:
            "The unreasonable effectiveness of JPEG: A signal processing approach",
          subtitle:
            "JPEG is not as bad as we put it (under the right conditions)",
          thumbnail:
            "https://i.ytimg.com/vi/0me3guauqOU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCi74IrUYyAW5OUwhXrhT3WuGgnxA",
          link: "https://www.youtube.com/watch?v=0me3guauqOU",
          category: "Video production",
        },
        {
          title: "The riddle that seems impossible even if you know the answer",
          subtitle: "Probability theory is probably lying to us",
          thumbnail:
            "https://i.ytimg.com/vi/iSNsgj1OCLA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzkXkkiqvdHdysp3towdtNV84Zcg",
          link: "https://www.youtube.com/watch?v=iSNsgj1OCLA&t=945s",
          category: "Video production",
        },
        {
          title: "How imaginary numbers were invented",
          subtitle: "Math got so hard we just had to think outside the line",
          thumbnail:
            "https://i.ytimg.com/vi/cUzklzVXJwo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDPETABjsedr14aDuHULweNRzK0AQ",
          link: "https://www.youtube.com/watch?v=cUzklzVXJwo",
          category: "Video production",
        },
        {
          title: "Collatz Conjecture",
          subtitle: "Tiny little impossible problem",
          thumbnail:
            "https://i.ytimg.com/vi/094y1Z2wpJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO53Ianb2RhP7cAX9B83XXCGejCw",
          link: "https://www.youtube.com/watch?v=094y1Z2wpJg",
          category: "Video production",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <div className="text-lg xl:text-xl xl:mx-auto xl:max-w-4xl">
          <div
            id="portfolio"
            className="text-6xl font-display xl:text-7xl font-bold text-white xl:mx-auto xl:max-w-full"
          >
            Portfolio
          </div>

          <div className="text-gray-400 text-xl font-blogpost text-left mt-10 mb-20">
            Take a peek at some of the works I've done so far! Don't be shy,
            everything is a link.
          </div>

          <div className="text-white font-bold text-2xl font-display mb-3">
            Index
          </div>
          <div className="flex flex-col space-y-3 text-lg font-display mb-20 pl-5 ">
            {works.map((w) => {
              return (
                <a
                  href={"#" + w.category.toLowerCase().replace(" ", "-")}
                  className="text-white hover:text-accent-1-lighter transition-colors"
                >
                  {"· " + w.category}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col space-y-20 text-xl">
            {works.map((c) => {
              return (
                <div className="text-white">
                  <div className="mb-10 font-display font-bold text-3xl xl:text-4xl">
                    <a
                      id={c.category.toLowerCase().replace(" ", "-")}
                      href="#portfolio"
                      className=""
                    >
                      {c.category}
                    </a>
                    <div className="text-xl mt-5 text-gray-400 font-blogpost font-normal">
                      {c.subtitle}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 text-lg">
                    {c.works.map((w) => {
                      return <PortfolioItem2 key={w.title} workInfo={w} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
