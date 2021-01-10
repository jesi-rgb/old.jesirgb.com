import Image from "next/image";

export const HeaderTW = () => {
  return (
    <>
      {/* header itself */}
      <header className="relative bg-accent-1 mb-10 md:py-6 md:mb-20">
        {/* div for all three elements */}
        <div className="flex flex-row mx-auto items-center">
          {/* logo */}
          <div className="m-2 align-middle w-1/2 md:w-1/4 md:scale-250">
            <a href="/">
              <img src="/jesi.svg" alt="" width={50} height={50} />
            </a>
          </div>

          {/* title */}
          <div className="hidden text-white text-4xl font-bold hover:text-accent-1-hover transition-colors md:visible md:flex md:items-center md:w-2/4">
            <a href="/">Thinking thoughts</a>
          </div>

          {/* navigators */}
          <div className="w-1/2 text-md space-x-3 mx-4 font-medium md:justify-end md:w-1/2 md:text-2xl">
            <a
              href="/blog"
              className="text-white hover:text-accent-1-hover transition-colors"
            >
              Blog
            </a>
            <a
              href="https://jesus-enrique-cv.jesi-rgb.vercel.app"
              className="text-white hover:text-accent-1-hover transition-colors"
            >
              Curriculum
            </a>
            <a
              href="/about"
              className="text-white hover:text-accent-1-hover transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
