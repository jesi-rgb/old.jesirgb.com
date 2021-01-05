export const HeaderTW = () => {
  return (
    <>
      <div class="relative bg-accent-1 mb-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <span href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10 bg-white"
                  src="/jesi.svg"
                  alt=""
                />
              </span>
            </div>
            <div class="-mr-2 -my-2"></div>
            <nav class="hidden md:flex space-x-10">
              <a
                href="/"
                class="text-base font-medium text-white text-2xl font-bold hover:text-gray-900"
              >
                Thinking thoughts
              </a>
            </nav>
            <nav class="hidden md:flex items-center space-x-10 justify-end md:flex-1 lg:w-0">
              <a
                href="/blog"
                class="whitespace-nowrap text-base font-medium text-white hover:text-gray-900"
              >
                Blog
              </a>
              <a
                href="/curriculum"
                class="whitespace-nowrap text-base font-medium text-white hover:text-gray-900"
              >
                Curriculum
              </a>
              <a
                href="/about"
                class="whitespace-nowrap text-base font-medium text-white hover:text-gray-900"
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
