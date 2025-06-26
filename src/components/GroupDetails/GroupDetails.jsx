import React from "react";
import { useLoaderData } from "react-router";
import Error from "../../pages/Error";

const GroupDetails = () => {
  const group = useLoaderData();

  const {
    _id,
    groupName,
    hobbyCategory,
    description,
    location,
    members,
    date,
    url,
    name,
    email,
  } = group || {};

  if (!_id) return <Error />;

  const today = new Date();
  const groupStartDate = new Date(date);
  const isExpired = today > groupStartDate;

  return (
    <div className="w-11/12 md:w-10/12 mx-auto px-4 py-10 mt-16">
      <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden">
        <div className="md:flex">
          {/* Group Image */}
          <div className="md:w-1/2">
            <img
              src={url}
              alt={groupName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Group Info */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-3xl font-bold">{groupName}</h2>
            <p className="text-sm text-gray-500">Category: {hobbyCategory}</p>
            <p className="text-gray-700">{description}</p>

            <div className="text-sm space-y-1">
              <p>
                <span className="font-semibold">Meeting Location:</span>{" "}
                {location}
              </p>
              <p>
                <span className="font-semibold">Start Date:</span> {date}
              </p>
              <p>
                <span className="font-semibold">Max Members:</span> {members}
              </p>
              <p>
                <span className="font-semibold">Organizer:</span> {name}
              </p>
            </div>

            {isExpired ? (
              <p className="text-error font-semibold mt-4">
                This group is no longer active.
              </p>
            ) : (
              <button className="btn btn-outline mt-4 w-full">
                Join Group
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
