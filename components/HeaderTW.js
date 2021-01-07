export const HeaderTW = () => {
  return (
    <>
      <div className="relative bg-accent-1 py-6 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <a href="/">
                <img
                  className="transform scale-250 sm:h-10"
                  src="/jesi.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2"></div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="/"
                className="text-base font-medium text-white text-4xl font-bold hover:text-accent-1-hover transition-colors"
              >
                Thinking thoughts
              </a>
            </nav>
            <nav className="hidden md:flex items-right space-x-10 justify-end md:flex-1 lg:w-0">
              <a
                href="/blog"
                className="whitespace-nowrap text-base text-2xl font-medium text-white hover:text-accent-1-hover transition-colors"
              >
                Blog
              </a>
              <a
                href="/curriculum"
                className="whitespace-nowrap text-base text-2xl font-medium text-white hover:text-accent-1-hover transition-colors"
              >
                Curriculum
              </a>
              <a
                href="/about"
                className="whitespace-nowrap text-base text-2xl font-medium text-white hover:text-accent-1-hover transition-colors"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
