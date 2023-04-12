import Layout from "../../components/Layout";
import Head from "next/head";

import {
  faCompactDisc,
  faGlobe,
  faPenNib,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import PortfolioItem from "@/components/portfolio/PortfolioItem";
import IndexPortfolioItem from "@/components/portfolio/IndexPortfolioItem";

export default function Blog() {
  let works = [
    {
      category: "Web Design",
      subtitle: "Working on the new internet wave, baby!",
      works: [
        {
          title: "elmetro",
          subtitle:
            "a tiny little app to check tram timings in my city. made with svelte and my city's API!",
          thumbnail: "https://elmetro.vercel.app/elmetro-banner.jpg",
          link: "https://elmetro.vercel.app/",
          spanDoubleCol: true,
        },
        {
          title: "FOCAL-ES",
          subtitle:
            "a website that allows linguists to check how different focal particles interact within the spanish language",
          thumbnail: "https://focal-es.vercel.app/focal-es-thumb-wide.png",
          link: "https://focal-es.vercel.app/",
          spanDoubleCol: true,
        },
      ],
    },
    {
      category: "Graphic design",
      subtitle: "Some of my adventures pretending I'm a graphic designer",
      works: [
        {
          title: "AMPLITUDE",
          subtitle: "Powerful signals for you",
          thumbnail: "/thumbnails-portfolio/amplitude.jpg",
          link: "/thumbnails-portfolio/amplitude.jpg",
          spanDoubleCol: true,
        },
        {
          title: "Bloom",
          subtitle: "Grow together, Bloom together",
          thumbnail: "/thumbnails-portfolio/bloom.jpg",
          link: "/thumbnails-portfolio/bloom.jpg",
          spanDoubleCol: false,
        },
        {
          title: "Joyful",
          subtitle: "happy blues",
          thumbnail: "/thumbnails-portfolio/joyful.jpg",
          link: "/thumbnails-portfolio/joyful.jpg",
          spanDoubleCol: false,
        },
        {
          title: "LIMIT",
          subtitle: "simulating event horizons in p5.js",
          thumbnail: "/thumbnails-portfolio/LIMIT.jpg",
          link: "/thumbnails-portfolio/LIMIT.jpg",
          spanDoubleCol: true,
        },
        {
          title: "ENIGMA",
          subtitle: "playing with shapes and textures",
          thumbnail: "/thumbnails-portfolio/ENIGMA.jpg",
          link: "/thumbnails-portfolio/ENIGMA.jpg",
        },
        {
          title: "TARGET",
          subtitle: "playing with even more shapes and textures",
          thumbnail: "/thumbnails-portfolio/TARGET.jpg",
          link: "/thumbnails-portfolio/TARGET.jpg",
        },
        {
          title: "Circle Study Wallpaper set",
          subtitle: "Making circles for my screen",
          thumbnail: "/thumbnails-portfolio/circle-study-wp.png",
          link: "https://jesirgb.gumroad.com/l/circle-study-wallpapers",
          spanDoubleCol: true,
        },

        {
          title: "If the path looks clear, you're on someone else's",
          subtitle: "Beautiful quote by Joseph Campbell",
          thumbnail: "/thumbnails-portfolio/path.jpg",
          link: "/thumbnails-portfolio/path.jpg",
        },
        {
          title: "Mistakes are just means to solutions",
          subtitle: "A different approach to having a problem",
          thumbnail: "/thumbnails-portfolio/mistakes-ocean.jpg",
          link: "/thumbnails-portfolio/mistakes-ocean.jpg",
        },
        {
          title: "BUBBLE TEA",
          subtitle: "it's just fucking sick",
          thumbnail: "/thumbnails-portfolio/bubble-tea.jpg",
          link: "/thumbnails-portfolio/bubble-tea.jpg",
        },
        {
          title: "You gotta close a door to open a window",
          subtitle: "from Tyler's NEW MAGIC WAND",
          thumbnail: "/thumbnails-portfolio/door-window.jpg",
          link: "/thumbnails-portfolio/door-window.jpg",
        },
        {
          title: "Just bought some new shoes",
          subtitle: "why is it so damn hard",
          thumbnail: "/thumbnails-portfolio/shoes-portfolio.jpg",
          link: "/thumbnails-portfolio/shoes-portfolio.jpg",
        },
        {
          title: "CACTUS",
          subtitle: "Cool lamps in cool places",
          thumbnail: "/thumbnails-portfolio/cactus-portfolio.jpg",
          link: "/thumbnails-portfolio/cactus-portfolio.jpg",
        },
        {
          title: "Enjoy the beach",
          subtitle: "In late September!",
          thumbnail: "/thumbnails-portfolio/beach-portfolio.jpg",
          link: "/thumbnails-portfolio/beach-portfolio.jpg",
        },
        {
          title: "Brain got hands",
          subtitle: "Fighting thoughts never went well",
          thumbnail: "/thumbnails-portfolio/brain-portfolio.jpg",
          link: "/thumbnails-portfolio/brain-portfolio.jpg",
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
          title: "Orion Logo",
          subtitle: "Redesigning Orion's logo just for fun",
          thumbnail: "/thumbnails-portfolio/orion-logo.jpg",
          link: "https://twitter.com/jesi_rgb/status/1568197841012531200",
          spanDoubleCol: true,
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
          title: "Implementing GIF saving in p5.js",
          subtitle:
            "A talk for CCFest 2023 about adding GIF export functionality to the p5.js ecosystem!",
          thumbnail:
            "https://i.ytimg.com/vi/WG3ZAydSN4Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxU9eQw0O3I2ljg2M32BPYpDd1fA",
          link: "https://youtu.be/WG3ZAydSN4Q",
        },
        {
          title:
            "Create a minimal, clean design with Cavalry, Affinity Photo & Designer",
          subtitle: "More tutorials!",
          thumbnail:
            "https://i.ytimg.com/vi/rvqAad4iswA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgEMoCwKqKMDvzE8lEi18bHsg1Og",
          link: "https://youtu.be/rvqAad4iswA",
        },
        {
          title: "Abstract Poster Design using Cavalry and Affinity Designer",
          subtitle: "First video on my channel! Niche tutorials.",
          thumbnail:
            "https://i.ytimg.com/vi/lG88LGGxMvE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBDtHFjQd0l8ho0HpRWlyCPd6rCg",
          link: "https://youtu.be/lG88LGGxMvE",
        },
        {
          title:
            "The Discrete Fourier Transform: Most Important Algorithm Ever?",
          subtitle: "The most ubiquitous and praised algorithm. Ever.",
          thumbnail:
            "https://i.ytimg.com/vi/yYEMxqreA10/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7jlJpLlHyQc8YxniAmeH3vIZnbA",
          link: "https://www.youtube.com/watch?v=yYEMxqreA10",
        },
        {
          title:
            "The Traveling Salesman Problem: when good enough beats perfect",
          subtitle: "Going places has never been this hard",
          thumbnail:
            "https://i.ytimg.com/vi/GiDsjIBOVoA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCl3wLO7Ak-DcE436vfRkK7sG6rTw",
          link: "https://www.youtube.com/watch?v=GiDsjIBOVoA",
        },
        {
          title: "PageRank: A trillion dollar algorithm",
          subtitle: "Search engines explained",
          thumbnail:
            "https://i.ytimg.com/vi/JGQe4kiPnrU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAY0MpvUKnmi9whJq4FSIrFEH451A",
          link: "https://www.youtube.com/watch?v=JGQe4kiPnrU",
        },
        {
          title: "How PNG Works: Compromising speed for quality",
          subtitle: "PNG is not perfect tho!",
          thumbnail:
            "https://i.ytimg.com/vi/EFUYNoFRHQI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB44R9WPwmlmmKVuRUa90vV_ZDusQ",
          link: "https://www.youtube.com/watch?v=EFUYNoFRHQI",
        },
        {
          title:
            "The unreasonable effectiveness of JPEG: A signal processing approach",
          subtitle:
            "JPEG is not as bad as we put it (under the right conditions)",
          thumbnail:
            "https://i.ytimg.com/vi/0me3guauqOU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCi74IrUYyAW5OUwhXrhT3WuGgnxA",
          link: "https://www.youtube.com/watch?v=0me3guauqOU",
        },
        {
          title: "The riddle that seems impossible even if you know the answer",
          subtitle: "Probability theory is probably lying to us",
          thumbnail:
            "https://i.ytimg.com/vi/iSNsgj1OCLA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzkXkkiqvdHdysp3towdtNV84Zcg",
          link: "https://www.youtube.com/watch?v=iSNsgj1OCLA&t=945s",
        },
        {
          title: "How imaginary numbers were invented",
          subtitle: "Math got so hard we just had to think outside the line",
          thumbnail:
            "https://i.ytimg.com/vi/cUzklzVXJwo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDPETABjsedr14aDuHULweNRzK0AQ",
          link: "https://www.youtube.com/watch?v=cUzklzVXJwo",
        },
        {
          title: "Collatz Conjecture",
          subtitle: "Tiny little impossible problem",
          thumbnail:
            "https://i.ytimg.com/vi/094y1Z2wpJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO53Ianb2RhP7cAX9B83XXCGejCw",
          link: "https://www.youtube.com/watch?v=094y1Z2wpJg",
        },
      ],
    },

    {
      category: "Music production",

      subtitle:
        "This category includes all my solo projects publicly available on the main streaming platforms. I've also made some commissions for background music for Youtube channels, but that won't appear here.",

      works: [
        {
          title: "Zenith",
          subtitle:
            "A conceptual album about space, painting landscapes with sounds.",
          thumbnail:
            "https://i.scdn.co/image/ab67616d0000b273b9943e6dbc57e40f4b87a6c4",
          link: "https://open.spotify.com/album/4oXxekjpYQlgZGZ5DfVyxM?si=qVyOzZg0ScKOoq1KgnRI3Q",
          spanDoubleCol: true,
        },
        {
          title: "Te elijo a ti",
          subtitle: "A very fun song made with my friend :)",
          thumbnail:
            "https://i.scdn.co/image/ab67616d0000b273bf95c21d0f10efee3342ab3e",
          link: "https://open.spotify.com/album/36DyQNaCO3v1vXV6jQHt8l?si=l8sOVnVDQiadScet1nILbg",
        },
        {
          title: "Outlandish",
          subtitle: "first song i ever uploaded. please be kind",
          thumbnail:
            "https://i.scdn.co/image/ab67616d0000b27339feb0941c66bbc486d1f187",
          link: "https://open.spotify.com/album/59tjfDMfQWGLdrUILnF8Kp?si=Rv7aBgDqTbSFa2J2kupOFQ",
        },
      ],
    },
  ];

  let icons = [faGlobe, faPenNib, faVideo, faCompactDisc];

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <div>
          <div
            id="portfolio"
            className="text-8xl font-display text-white font-bold"
          >
            Portfolio
          </div>

          <div className="text-white text-xl font-sans text-left mb-20">
            Take a peek at some of the works I've done so far! Don't be shy,
            everything is a link.
          </div>

          <div className="text-white font-bold text-3xl font-serif">Index</div>
          <div className="text-gray-400 mb-6 text-xl mt-5">Quick shortcuts</div>
          <div className="grid grid-cols-2 gap-4 xl:gap-10 mb-20">
            {works.map((w, i) => {
              return (
                <IndexPortfolioItem category={w.category} icon={icons[i]} />
              );
            })}
          </div>

          <div className="flex flex-col space-y-20 text-xl">
            {works.map((c) => {
              return (
                <div className="text-white">
                  <div className="mb-10 text-3xl xl:text-4xl">
                    <a
                      id={c.category.toLowerCase().replace(" ", "-")}
                      href="#portfolio"
                      className="font-bold font-serif"
                    >
                      {c.category}
                    </a>
                    <div className="text-xl mt-5 text-gray-200 font-sans font-thin">
                      {c.subtitle}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 text-lg">
                    {c.works.map((w) => {
                      return <PortfolioItem key={w.title} workInfo={w} />;
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
