import Footer from "./Footer";
import { HeaderTW } from "./HeaderTW";
import Meta from "../components/meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <HeaderTW />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
