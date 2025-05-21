import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bookClub from "../../assets/bookClub.jpg";
import hiking from "../../assets/hiking.jpg";
import painting from "../../assets/painting.jpg";
import photography from "../../assets/photography.jpg";
import game from "../../assets/game.jpg";
import { Typewriter } from "react-simple-typewriter";

const hobbies = [
  {
    title: "BOOK CLUB",
    country: "Bangladesh",
    img: bookClub,
  },
  {
    title: "HIKING CREW",
    country: "Global",
    img: hiking,
  },
  {
    title: "PAINTING CIRCLE",
    country: "Global",
    img: painting,
  },
  {
    title: "PHOTOGRAPHY CLUB",
    country: "Global",
    img: photography,
  },
  {
    title: "GAMING HUB",
    country: "Global",
    img: game,
  },
];

const Banner = () => {
  return (
    <section className="relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 py-20 gap-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h4 className="text-xl font-medium text-success">HobbyHub</h4>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            CONNECT THROUGH{" "}
            <p className="text-success">
              <Typewriter
                words={[
                  "PASSIONS",
                  "CREATIVITY",
                  "ADVENTURES",
                  "LEARNING",
                  "CRAFTING",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </h1>
          <p className="text-base-content">
            Discover and join local hobby groups — book clubs, hiking crews, art
            circles, and more. Build meaningful communities around what you
            love.
          </p>
          <button className="btn bg-neutral text-neutral-content mt-4">
            Explore Groups
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="w-full lg:w-2/3">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {hobbies.map((hobby, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="h-80 rounded-xl shadow-lg overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${hobby.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-opacity-50 p-4 flex flex-col justify-end">
                    <p className="text-sm text-success font-semibold">
                      {hobby.country}
                    </p>
                    <h3 className="text-lg font-bold text-accent-content">
                      {hobby.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
