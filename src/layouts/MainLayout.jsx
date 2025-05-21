import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/ui/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header />
      {isNavigating ? (
        <Spinner />
      ) : (
        <div className="min-h-[calc(100vh-378px)]">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
