import React from "react";
import "./LayoutStyle.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-div">
        <div className="container-fluid container-div">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
