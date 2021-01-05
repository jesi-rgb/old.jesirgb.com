import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div class="relative bg-accent-1 pb-3 mb-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center border-b-2 pt-6 pb-1 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a className="text-2xl font-bold text-white" href="/">
                Thinking thoughts
              </a>
            </div>
            <div class="flex justify-end lg:w-0 lg:flex-1">
              <a className="text-2xl font-bold text-white" href="/">
                Hola
              </a>
            </div>
            <div class="flex justify-end lg:w-0 lg:flex-1">
              <a className="text-2xl font-bold text-white" href="/">
                Hola
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .header {
          padding: 0.33em;
          position: relative;
          margin-bottom: 1em;

          background: #1abc9c;
        }
      `}</style> */}
    </>
  );
};
