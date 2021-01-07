import Footer from "./Footer";
import { HeaderTW } from "./HeaderTW";
import Meta from "../components/meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="max-h-screen">
        <HeaderTW />
        <div className="relative min-h-screen">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
