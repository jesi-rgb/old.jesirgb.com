import Footer from "./Footer";
import { Header } from "./Header";
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
      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
