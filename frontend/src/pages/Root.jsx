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
      <Outlet />  {/* Here is where nested routes like /courses, /quiz/:courseId will render */}
      <Footer />
    </div>
  );
};

export default Root;


