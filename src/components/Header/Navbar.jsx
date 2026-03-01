import { Github } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navStyles = ({ isActive }) =>
    isActive
      ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-base font-semibold underline underline-offset-4 mr-6 mb-2 lg:mb-0"
      : "text-gray-700 hover:text-[#632EE3] font-semibold mr-6 transition-colors text-base mb-2 lg:mb-0";

  const links = (
    <>
      <NavLink to="/" end className={navStyles}>
        Home
      </NavLink>

      <NavLink to="/apps" className={navStyles}>
        Apps
      </NavLink>

      <NavLink to="/installation" className={navStyles}>
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink
          to={"/"}
          className="btn btn-ghost text-xl font-bold bg-linear-to-r from-[#4f0de9] to-[#833ae9] bg-clip-text text-transparent"
        >
          <img className="h-10 p-1" src={logo} alt="Logo" />
          Hero.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Nurmohammed-ux"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-sm text-white"
        >
          <Github className="border-3 border-white text-[#632EE3] bg-white rounded-full" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
