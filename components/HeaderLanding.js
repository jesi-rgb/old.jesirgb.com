export const HeaderLanding = () => {
  return (
    <>
      {/* header itself */}
      <div className="relative mb-10 mt-3 md:mb-20 z-10">
        {/* div for all three elements */}
        <div className="flex flex-row items-center md:py-5 mx-10">
          {/* logo */}
          <div className="flex w-1/2 md:w-1/3 md:justify-start">
            <a href="/" className="-m-5 md:-m-0">
              <img
                src="/jesi.svg"
                alt="logo for jesús rascón"
                width={100}
                height={100}
                className="transform scale-50 md:scale-100"
              />
            </a>
          </div>
          {/* title */}
          <div className="hidden text-white text-5xl font-bold hover:text-accent-1-lighter transition-colors md:visible md:flex md:justify-center md:w-1/3">
            <a href="/">Thinking thoughts</a>
          </div>

          {/* navigators */}
          <div className="flex md:flex-auto text-md space-x-6 mx-2 md:mx-0 font-medium md:justify-end md:text-2xl md:w-1/3">
            <a
              href="/blog"
              className="text-white hover:text-accent-1-lighter transition-colors"
            >
              Blog
            </a>
            <a
              href="https://jesus-enrique-cv.jesi-rgb.vercel.app"
              className="text-white hover:text-accent-1-lighter transition-colors"
            >
              Curriculum
            </a>
            <a
              href="/about"
              className="text-white hover:text-accent-1-lighter transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
