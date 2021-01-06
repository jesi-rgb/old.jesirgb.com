export const HeaderTW = () => {
  return (
    <>
      <div class="relative bg-accent-1 py-6 mb-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img
                  class="transform scale-200 sm:h-10"
                  src="/jesi.svg"
                  alt=""
                />
              </a>
            </div>
            <div class="-mr-2 -my-2"></div>
            <nav class="hidden md:flex space-x-10">
              <a
                href="/"
                class="text-base font-medium text-white text-4xl font-bold hover:text-accent-7"
              >
                Thinking thoughts
              </a>
            </nav>
            <nav class="hidden md:flex  items-center space-x-10 justify-end md:flex-1 lg:w-0">
              <a
                href="/blog"
                class="whitespace-nowrap text-base text-2xl font-medium text-white hover:text-gray-900"
              >
                Blog
              </a>
              <a
                href="/curriculum"
                class="whitespace-nowrap text-base text-2xl font-medium text-white hover:text-gray-900"
              >
                Curriculum
              </a>
              <a
                href="/about"
                class="whitespace-nowrap text-base text-2xl font-medium text-white hover:text-gray-900"
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
