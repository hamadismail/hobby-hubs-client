import React from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { NavLink } from "react-router";
import "./header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="allgroup">All Groups</NavLink>
      </li>
      <li>
        <NavLink to="creategroup">Create Group</NavLink>
      </li>
      <li>
        <NavLink to="mygroup">My Groups</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar p-0 w-11/12 mx-auto">
        {/* navbar start */}
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pl-0">HobbyHub</a>
        </div>

        {/* center navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* navbar end */}
        <div className="navbar-end">
          {/* theme-controler */}
          <div className="mr-4">
            <ThemeSwitcher />
          </div>
          <a className="btn rounded-lg bg-neutral text-neutral-content">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
