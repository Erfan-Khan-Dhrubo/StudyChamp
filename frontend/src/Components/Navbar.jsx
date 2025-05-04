import React from "react";
import { Link } from "react-router";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn" to="/login">
            Login
          </Link>

          <Link className="btn" to="/login">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
