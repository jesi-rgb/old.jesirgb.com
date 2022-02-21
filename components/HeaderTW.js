export const HeaderTW = () => {
  return (
    <>
      {/* header itself */}
      <div className="relative mb-10 md:mb-20 z-10">
        {/* div for all three elements */}
        <div className="flex flex-row border-b border-accent-1 items-center md:py-5">
          {/* logo */}
          <div className="flex w-1/2 md:w-1/3 md:justify-start">
            <a href="/" className="-m-4 md:-m-0">
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
          <div className="hidden text-white text-4xl font-bold hover:text-accent-1-lighter transition-colors md:visible md:flex md:justify-center md:w-1/3">
            <a href="/">Thinking thoughts</a>
          </div>

          {/* navigators */}
          <div className="absolute right-0 flex md:flex-auto text-sm space-x-2 xl:space-x-4 mx-2 md:mx-0 font-medium md:justify-end md:text-lg w-1/2 md:w-1/3">
            <a
              href="/blog"
              className="text-white hover:text-accent-1-lighter transition-colors"
            >
              Blog
            </a>
            <a
              href="/portfolio"
              className="text-white hover:text-accent-1-lighter transition-colors"
            >
              Portfolio
            </a>
            <a
              href="/curriculum"
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
