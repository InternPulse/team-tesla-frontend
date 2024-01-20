import React from "react";
import Navbar from "../components/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="  max-w-[1200px] m-auto">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
