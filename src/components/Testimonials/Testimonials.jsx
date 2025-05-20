import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily Johnson",
    feedback:
      "HobbyHub helped me find a book club in my city. Now I meet new friends every week!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajat Kumar",
    feedback:
      "I started a hiking group through HobbyHub. Within a month, we had over 20 active members.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Linda Gomez",
    feedback:
      "This platform brought my passion for painting to life by connecting me with local artists.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => (
  <section className="w-11/12 mx-auto my-12 text-center">
    <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
    <p className="max-w-2xl mx-auto mb-10">
      Hear from real people building real communities through HobbyHub.
    </p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow hover:shadow-md transition text-left"
        >
          <FaQuoteLeft className="text-xl mb-4" />
          <p className="text-sm  mb-4 italic">"{testimonial.feedback}"</p>
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-400">HobbyHub Member</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
