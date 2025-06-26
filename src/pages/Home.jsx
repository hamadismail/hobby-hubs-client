import React from "react";
import Banner from "../components/Banner/Banner";
import FeaturedGroups from "../components/FeaturedGroups/FeaturedGroups";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyToChoose from "../components/WhyToChoose/WhyToChoose";
import { useLoaderData } from "react-router";
import "./Home/Banner/embla.css";
import EmblaCarousel from "./Home/Banner/EmblaCarousel";
import HeroSlider from "./Home/Banner/HeroSlider";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
  const groups = useLoaderData();

  return (
    <div>
      <HeroSlider />
      <FeaturedGroups groups={groups} />
      <WhyToChoose />
      <Testimonials />
    </div>
  );
};

export default Home;
