// import React from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { Outlet } from "react-router";

// const Root = () => {
//   return (
//     <div className="w-9/10 mx-auto">
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Root;



import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <Outlet /> 
      {/* this is a placeholder that renders the child route components based on the current URL path. */}
      <Footer />
    </div>
  );
};

export default Root;


