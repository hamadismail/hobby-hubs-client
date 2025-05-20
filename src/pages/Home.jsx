import React from "react";
import Banner from "../components/Banner/Banner";
import FeaturedGroups from "../components/FeaturedGroups/FeaturedGroups";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyToChoose from "../components/WhyToChoose/WhyToChoose";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedGroups />
      <WhyToChoose />
      <Testimonials />
    </div>
  );
};

export default Home;
