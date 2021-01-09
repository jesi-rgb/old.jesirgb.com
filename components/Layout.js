import Footer from "./Footer";
import { HeaderTW } from "./HeaderTW";
import Meta from "../components/meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <HeaderTW />
      <div className="max-w-screen-xl mx-auto">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
