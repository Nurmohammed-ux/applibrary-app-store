import { AppWindow, CalendarArrowDown, Github, HousePlus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] text-base font-medium border-b-2 mr-6 mb-3 lg:mb-0 border-[#632EE3] pb-1 flex items-center gap-2"
            : "text-gray-600 text-base font-medium flex items-center mb-3 lg:mb-0 mr-6 gap-2"
        }
      >
        <HousePlus size={18} /> Home
      </NavLink>

      <NavLink
        to="/apps"
        end
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] text-base font-medium border-b-2 mb-3 lg:mb-0 mr-6 border-[#632EE3] pb-1 flex items-center gap-2"
            : "text-gray-600 text-base font-medium flex items-center mb-3 lg:mb-0 mr-6 gap-2"
        }
      >
        <AppWindow size={18} />
        Apps
      </NavLink>

      <NavLink
        to="/installApp"
        end
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] text-base font-medium border-b-2 mb-3 lg:mb-0 mr-6 border-[#632EE3] pb-1 flex items-center gap-2"
            : "text-gray-600 text-base font-medium flex items-center mb-3 lg:mb-0 mr-6 gap-2"
        }
      >
        <CalendarArrowDown size={18} />
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-white px-4 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 20 20"
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
          className="btn btn-ghost text-lg lg:text-xl font-bold bg-linear-to-r from-[#4f0de9] to-[#833ae9] bg-clip-text text-transparent"
        >
          <img className="h-7 md:h-10 p-1" src={logo} alt="Logo" />
          AppLibrary
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
