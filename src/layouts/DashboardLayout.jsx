import React from "react";
import { FiMenu, FiHome, FiUser, FiSettings } from "react-icons/fi";
import { IoIosCreate } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink, Outlet, useNavigate, useNavigation } from "react-router";
import "../components/Header/header.css";
import Spinner from "../components/ui/Spinner";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          activeClassName="bg-primary/10 text-primary font-medium"
        >
          <FiHome className="text-lg" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          end
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          activeClassName="bg-primary/10 text-primary font-medium"
        >
          <MdDashboard className="text-lg" /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/createGroup"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          activeClassName="bg-primary/10 text-primary font-medium"
        >
          <IoIosCreate className="text-lg" /> Create Group
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myGroups"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          activeClassName="bg-primary/10 text-primary font-medium"
        >
          <FiUser className="text-lg" /> My Groups
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Top Navbar (Mobile) */}
          <div className="w-full navbar bg-white shadow-sm px-6 lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-circle"
            >
              <FiMenu className="text-xl" />
            </label>
            <h1 className="text-xl font-semibold ml-2 text-gray-800">
              HobbyHub
            </h1>
          </div>

          {/* Page Content */}
          <div className="p-6">{isNavigating ? <Spinner /> : <Outlet />}</div>
        </div>

        {/* Sidebar (Desktop) */}
        <div className="drawer-side fixed left-0 top-0 z-20">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <aside className="w-64 min-h-full bg-white border-r border-gray-200 flex flex-col">
            {/* Logo/Brand */}
            <div
              onClick={() => navigate("/")}
              className="p-5 cursor-pointer text-xl font-bold text-gray-800 border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              HobbyHub
            </div>

            {/* Navigation Links */}
            <ul className="menu p-4 flex-1 text-gray-700">{links}</ul>

            {/* Footer (Settings/Logout) */}
            <div className="p-4 border-t border-gray-200">
              <NavLink className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <FiSettings className="text-lg" /> Settings
              </NavLink>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
