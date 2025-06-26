import React from "react";
import { FaHandshake, FaUsers } from "react-icons/fa";
import { MdDiversity3, MdGroups } from "react-icons/md";

const OurMission = () => {
  return (
    <div>
      {/* Mission Section */}
      <div className="bg-warning/20 rounded-2xl p-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg mb-8">
            At HobbyHub, we believe everyone deserves to find their tribe. We're
            on a mission to break down social barriers and help people connect
            through shared passions, whether it's painting, hiking, gaming, or
            any other hobby under the sun.
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
    </div>
  );
};

export default OurMission;
