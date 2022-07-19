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

























// import React from 'react'
// import Header from "./Header";

// const Layout = () => {
//   return (
//     <div>
//         <div>
//       <div>
//         <Header />
//        </div>
//        <div style={{ paddingTop: "50px" }} />
//        <div class="container-fluid" style={{ marginTop: "50px" }}>
//      <h3
//           style={{
//             marginLeft: "",
//             paddingBottom: "20px",
//             fontFamily: "'IBM Plex Sans' sans-serif",
//           }}
//         >
//           {" "}
//           Welcome{" "}
//         </h3>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Layout
