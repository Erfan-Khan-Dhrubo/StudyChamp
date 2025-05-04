import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a>Leaderboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign In</a>
          <a className="btn">Admin</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
