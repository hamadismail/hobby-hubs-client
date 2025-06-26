import React from "react";
import FeaturedGroups from "../components/FeaturedGroups/FeaturedGroups";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyToChoose from "../components/WhyToChoose/WhyToChoose";
import { useLoaderData } from "react-router";
import HeroSlider from "./Home/Banner/HeroSlider";
import OurMission from "./AboutUs/OurMission";

const Home = () => {
  const groups = useLoaderData();

  return (
    <div>
      <HeroSlider />
      <FeaturedGroups groups={groups} />
      <WhyToChoose />
      <OurMission />
      <Testimonials />
    </div>
  );
};

export default Home;
