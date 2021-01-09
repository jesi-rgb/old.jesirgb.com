export const HeaderTW = () => {
  return (
    <>
      <div className="relative bg-accent-1 py-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center py-6">
            <div className="flex flex-1">
              <a href="/">
                <img
                  className="transform scale-250 h-10"
                  src="/jesi.svg"
                  alt=""
                />
              </a>
            </div>
            <nav className="flex space-x-10">
              <a
                href="/"
                className="text-white text-4xl font-bold hover:text-accent-1-hover transition-colors"
              >
                Thinking thoughts
              </a>
            </nav>
            <nav className="flex items-right space-x-10 justify-end flex-1">
              <a
                href="/blog"
                className="whitespace-nowrap text-2xl font-medium text-white hover:text-accent-1-hover transition-colors"
              >
                Blog
              </a>
              <a
                href="https://jesus-enrique-cv.jesi-rgb.vercel.app"
                className="whitespace-nowrap text-2xl font-medium text-white hover:text-accent-1-hover transition-colors"
              >
                Curriculum
              </a>
              <a
                href="/about"
                className="whitespace-nowrap text-2xl font-medium text-white hover:text-accent-1-hover transition-colors"
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
