import React from "react";
import { FaUsers, FaGlobe, FaSmile } from "react-icons/fa";

const WhyToChoose = () => (
  <section className="w-11/12 mx-auto my-12 px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Why Choose HobbyHub?</h2>
    <p className="max-w-2xl mx-auto mb-10">
      HobbyHub makes it easy to connect with like-minded people, explore new
      interests, and build real communities around your passions.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 rounded-xl shadow hover:shadow-md transition">
        <FaUsers className="text-4xl text-neutral-content-content mb-4 mx-auto" />
        <h3 className="font-bold text-lg mb-2">Community-Driven</h3>
        <p className="text-sm">
          Connect with real people through shared interests and hobbies.
        </p>
      </div>
      <div className="p-6 rounded-xl shadow hover:shadow-md transition">
        <FaGlobe className="text-4xl text-neutral-content-content mb-4 mx-auto" />
        <h3 className="font-bold text-lg mb-2">Global Access</h3>
        <p className="text-sm">
          Join or create groups in any country, anytime, from any device.
        </p>
      </div>
      <div className="p-6  rounded-xl shadow hover:shadow-md transition">
        <FaSmile className="text-4xl text-neutral-content-content mb-4 mx-auto" />
        <h3 className="font-bold text-lg mb-2">Inclusive & Fun</h3>
        <p className="text-sm">
          From reading to hiking to painting – there’s something for everyone.
        </p>
      </div>
    </div>
  </section>
);

export default WhyToChoose;
