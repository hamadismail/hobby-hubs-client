import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-378px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
