import React from "react";

const GroupDetails = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto px-4 py-10">
      <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden">
        <div className="md:flex">
          {/* Group Image */}
          <div className="md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?hiking,nature"
              alt="Group"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Group Info */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-3xl font-bold">Hiking Crew</h2>
            <p className="text-sm text-gray-500">
              Category: Outdoor Activities
            </p>
            <p className="text-gray-700">
              Join our adventurous hiking crew that explores trails and
              mountains every weekend. Whether you're a beginner or an
              experienced hiker, this group is for all nature lovers!
            </p>

            <div className="text-sm space-y-1">
              <p>
                <span className="font-semibold">Meeting Location:</span>{" "}
                Dhanmondi Lake, Dhaka
              </p>
              <p>
                <span className="font-semibold">Start Date:</span> June 5, 2025
              </p>
              <p>
                <span className="font-semibold">Max Members:</span> 20
              </p>
              <p>
                <span className="font-semibold">Current Members:</span> 12
              </p>
              <p>
                <span className="font-semibold">Organizer:</span> Hamad Ismail
              </p>
            </div>

            <button className="btn btn-outline mt-4 w-full">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
