import Image from "next/image";

export const HeaderTW = () => {
  return (
    <>
      {/* header itself */}
      <div className="relative bg-accent-1 mb-10 lg:py-6 lg:mb-20">
        {/* div for all three elements */}
        <div className="flex flex-row mx-auto items-center lg:py-6">
          {/* logo */}
          <div className="m-2 justify-center align-middle w-1/2 lg:w-1/4 lg:mx-10 lg:transform lg:scale-250">
            <a href="/">
              <img src="/jesi.svg" alt="" width={50} height={50} />
            </a>
          </div>

          {/* title */}
          <div className="hidden text-white text-4xl font-bold hover:text-accent-1-hover transition-colors lg:visible lg:flex lg:items-center lg:w-2/4">
            <a href="/">Thinking thoughts</a>
          </div>

          {/* navigators */}
          <div className="w-1/2 text-md space-x-3 mx-4 font-medium lg:justify-end lg:w-1/2 lg:text-2xl">
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
      </div>
    </>
  );
};
