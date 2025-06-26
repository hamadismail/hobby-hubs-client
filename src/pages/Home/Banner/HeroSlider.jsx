import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, AnimatePresence } from "framer-motion";

import bookClub from "../../../assets/bookClub.jpg";
import hiking from "../../../assets/hiking.jpg";
import painting from "../../../assets/painting.jpg";
import photography from "../../../assets/photography.jpg";
import game from "../../../assets/game.jpg";
import { useNavigate } from "react-router";

const slides = [
  {
    title: "BOOK CLUB",
    subtitle: "Bangladesh",
    description: "Welcome to the book club",
    image: bookClub,
  },
  {
    title: "HIKING CREW",
    subtitle: "Global",
    description: "Welcome to the hiking crew",
    image: hiking,
  },
  {
    title: "PAINTING CIRCLE",
    subtitle: "Global",
    description: "Welcome to the painting circle",
    image: painting,
  },
  {
    title: "PHOTOGRAPHY CLUB",
    subtitle: "Global",
    description: "Welcome to the photography club",
    image: photography,
  },
  {
    title: "GAMING HUB",
    subtitle: "Global",
    description: "Welcome to the gamming hub",
    image: game,
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    renderMode: "performance",
    slides: {
      origin: "auto",
      perView: 2.5,
      spacing: 24,
    },
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2.5,
          spacing: 16,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.5,
          spacing: 12,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const activeSlide = slides[currentSlide % slides.length];

  const goPrev = () => instanceRef.current?.prev();
  const goNext = () => instanceRef.current?.next();

  return (
    <div className="relative w-full text-white overflow-hidden min-h-screen flex items-end">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0.8, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.8, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${activeSlide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="w-11/12 mx-auto relative z-20 flex flex-col gap-8 lg:flex-row justify-end items-end h-full py-12">
        {/* Left Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:absolute top-0 left-0 w-full lg:w-1/2 space-y-1 lg:space-y-3"
          >
            <p className="text-yellow-400 tracking-widest uppercase text-sm">
              {activeSlide.subtitle}
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {activeSlide.title}
            </h1>
            <p className="text-gray-200 text-lg">{activeSlide.description}</p>
            <button
              onClick={() => navigate("/groups")}
              className="cursor-pointer mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300"
            >
              Book your destination
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right Slide Cards */}
        <div className="w-full lg:w-1/2 relative flex justify-end items-end">
          <div className="w-full pl-4">
            <div ref={sliderRef} className="keen-slider">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-yellow-300 uppercase">
                      {slide.subtitle}
                    </p>
                    <h3 className="text-lg font-bold">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation & Slide Number */}
            <div className="mt-4 px-4 flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="w-9 h-9 bg-white text-black rounded-full hover:bg-gray-300"
                >
                  &#8592;
                </button>
                <button
                  onClick={goNext}
                  className="w-9 h-9 bg-white text-black rounded-full hover:bg-gray-300"
                >
                  &#8594;
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-0.5 bg-white" />
                <span className="text-lg font-semibold">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
