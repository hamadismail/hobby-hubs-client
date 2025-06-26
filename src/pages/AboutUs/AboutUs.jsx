import React from "react";
import { FaUsers, FaHandshake, FaLightbulb, FaHeart } from "react-icons/fa";
import { MdDiversity3, MdGroups } from "react-icons/md";
import teamImage from "../../assets/hiking.jpg";
import team1 from '../../assets/teams/hamad.jpg'
import team2 from '../../assets/teams/saifullah.jpg'
import team3 from '../../assets/teams/zahid.jpg'
import team4 from '../../assets/teams/shamim.jpg'

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto py-12 mt-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About HobbyHub</h1>
        <p className="text-xl text-base-content  max-w-3xl mx-auto">
          Connecting passionate people through shared interests and hobbies
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-primary/20 rounded-2xl p-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg mb-8">
            At HobbyHub, we believe everyone deserves to find their tribe. We're on a mission to
            break down social barriers and help people connect through shared passions, whether
            it's painting, hiking, gaming, or any other hobby under the sun.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <FaUsers className="text-3xl text-warning-content mx-auto mb-3" />
              <h3 className="font-medium text-gray-800">100,000+</h3>
              <p className="text-sm text-gray-600">Community Members</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <MdGroups className="text-3xl text-warning-content mx-auto mb-3" />
              <h3 className="font-medium text-gray-800">5,000+</h3>
              <p className="text-sm text-gray-600">Active Groups</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <MdDiversity3 className="text-3xl text-warning-content mx-auto mb-3" />
              <h3 className="font-medium text-gray-800">50+</h3>
              <p className="text-sm text-gray-600">Hobby Categories</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <FaHandshake className="text-3xl text-warning-content mx-auto mb-3" />
              <h3 className="font-medium text-gray-800">100+</h3>
              <p className="text-sm text-gray-600">Cities Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src={teamImage}
            alt="HobbyHub team"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, HobbyHub began as a small project between friends who struggled to
            find local communities for their niche interests. What started as a simple solution
            to our own problem has grown into a platform serving thousands of hobby enthusiasts
            worldwide.
          </p>
          <p className="text-gray-600 mb-6">
            We're proud to have created a space where people from all walks of life can come
            together, share knowledge, and form meaningful connections through shared passions.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <FaLightbulb className="text-yellow-500 mr-2" />
              <span className="text-sm font-medium">Passion-Driven</span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <FaHeart className="text-red-500 mr-2" />
              <span className="text-sm font-medium">Community-First</span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <FaHandshake className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">Inclusive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Meet The Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A diverse group of passionate individuals dedicated to building meaningful connections
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Hamad Ismail", role: "Founder & CEO", img: team1 },
            { name: "Sharif Saifullah", role: "Product Designer", img: team2 },
            { name: "Zahid Hasan", role: "Lead Developer", img: team3 },
            { name: "Shamim Ahmed", role: "Community Manager", img: team4 },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                {/* Replace with actual team member images */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  {/* {member.name.charAt(0)} */}
                  <img src={member.img}></img>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to join our community?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you're looking to share your passion or discover a new hobby, we've got a place for you.
        </p>
        <button className="bg-white cursor-pointer text-indigo-700 font-medium py-2 px-6 rounded-lg hover:bg-indigo-50 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
