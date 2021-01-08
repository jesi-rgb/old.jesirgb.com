import Footer from "./Footer";
import { HeaderTW } from "./HeaderTW";
import Meta from "../components/meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="max-h-screen">
        <HeaderTW />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
