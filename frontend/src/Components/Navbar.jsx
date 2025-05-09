import React from "react";
// import { Link } from "react-router";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100 shadow-sm ">
//         <div className="navbar-start">
//           <img className="w-8 h-8" src="https://i.ibb.co.com/Y73sLNQy/book-icon.png"></img>
//           <a className="text-3xl font-semibold">Study<span className="text-blue-500">Champ</span></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li className="text-xl font-semibold">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="text-xl font-semibold">
//               <Link to="/courses">Courses</Link>
//             </li>
//             <li className="text-xl font-semibold">
//               <Link to="/leaderboard">Leaderboard</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end gap-2">
//           <Link className="btn bg-blue-400 text-white rounded-xl" to="/login">
//             Login
//           </Link>

//           <Link className="btn bg-blue-400 text-white rounded-xl" to="/admin">
//             Admin
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin"); // Clear admin flag
    navigate("/"); // Redirect to home or login
  };

  return (
    <div className="navbar bg-gray-100 shadow-sm px-10">
      <div className="navbar-start">
        <img
          className="w-8 h-8"
          src="https://i.ibb.co.com/Y73sLNQy/book-icon.png"
          alt="Logo"
        />
        <Link to="/" className="text-3xl font-semibold ml-2">
          Study<span className="text-blue-500">Champ</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-semibold">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="text-xl font-semibold">
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {isAdmin ? (
          <button
            className="btn bg-blue-400 text-white rounded-xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link className="btn bg-blue-400 text-white rounded-xl" to="/login">
              Login
            </Link>
            <Link className="btn bg-blue-400 text-white rounded-xl" to="/admin">
              Admin
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

