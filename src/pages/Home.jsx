import React from "react";
import Banner from "../components/Banner/Banner";
import FeaturedGroups from "../components/FeaturedGroups/FeaturedGroups";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyToChoose from "../components/WhyToChoose/WhyToChoose";
import { useLoaderData } from "react-router";

const Home = () => {
  const groups = useLoaderData();

  return (
    <div>
      <Banner />
      <FeaturedGroups groups={groups} />
      <WhyToChoose />
      <Testimonials />
    </div>
  );
};

export default Home;
