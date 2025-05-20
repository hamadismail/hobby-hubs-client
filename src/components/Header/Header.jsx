import React, { use } from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { Link, NavLink, useNavigate } from "react-router";
import "./header.css";
import { AuthContext } from "../../providers/AuthContext";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, setUser, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
      <Tooltip id="my-tooltip" />
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
          <Link to="/" className="text-xl font-bold cursor-pointer">
            HobbyHub
          </Link>
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
          {user ? (
            <div className="flex items-center gap-2">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="top"
                className="h-8 w-8 cursor-pointer object-cover border-2 rounded-full"
                src={user.photoURL}
              />
              <button
                onClick={handleLogOut}
                className="btn rounded-lg bg-neutral text-neutral-content"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn rounded-lg bg-neutral text-neutral-content"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
