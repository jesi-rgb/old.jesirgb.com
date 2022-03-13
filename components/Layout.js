import Footer from "./Footer";
import { Header } from "./Header";
import { HeaderTW } from "./HeaderTW";
import Meta from "../components/meta";
import React, { useEffect } from "react";
import prism from "prismjs";
import "prismjs/components/prism-python.min";
// import "prismjs/themes/prism-okaidia.css";

export const Layout = ({ children }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);
  return (
    <>
      <Meta />
      {/* <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto"> */}
      <div className="xl:mx-auto xl:max-w-4xl">
        <HeaderTW />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
