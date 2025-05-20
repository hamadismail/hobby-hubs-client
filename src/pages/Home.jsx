import React from "react";
import Banner from "../components/Banner/Banner";
import FeaturedGroups from "../components/FeaturedGroups/FeaturedGroups";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedGroups />
      <Testimonials />
    </div>
  );
};

export default Home;
