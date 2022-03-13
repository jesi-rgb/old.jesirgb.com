export const Header = () => {
  return (
    <>
      <header class="text-white ">
        <div class="container mx-auto flex p-5 flex-row items-center">
          <a class="text-white mb-4 md:mb-0">
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto flex flex-row space-x-1 items-center justify-center text-sm">
            <a class="">First</a>
            <a class="">Second</a>
            <a class="">Third</a>
            <a class="">Fourth</a>
          </nav>
        </div>
      </header>
    </>
  );
};
