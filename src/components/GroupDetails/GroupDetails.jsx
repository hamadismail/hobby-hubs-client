import React from 'react';
import { useLoaderData } from 'react-router';
import Error from '../../pages/Error';
import { FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaEnvelope } from 'react-icons/fa';

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
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="w-11/12 mx-auto py-8 mt-16">
      <div className="rounded-xl shadow-md overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-64 sm:h-80 lg:h-96">
          <img
            src={url || 'https://via.placeholder.com/1200x600?text=Group+Image'}
            alt={groupName}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="max-w-3xl">
              <span className="inline-block bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {hobbyCategory}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{groupName}</h1>
              {isExpired && (
                <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                  Group Ended
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-8 p-6 sm:p-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About This Group</h2>
            <p className="mb-6 whitespace-pre-line">{description}</p>

            <div className="rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">Group Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCalendarAlt className="mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Start Date</h4>
                    <p className="">{formattedDate}</p>
                    {!isExpired && (
                      <p className="text-sm mt-1">
                        {Math.ceil((groupStartDate - today) / (1000 * 60 * 60 * 24))} days remaining
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Location</h4>
                    <p className="">{location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaUsers className="mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Members</h4>
                    <p className="">{members} max participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="rounded-lg p-6 sticky top-6">
              <h3 className="text-lg font-medium mb-4">Organizer</h3>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FaUser size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{name}</h4>
                  <div className="flex items-center text-sm">
                    <FaEnvelope className="mr-1" size={12} />
                    <span>{email}</span>
                  </div>
                </div>
              </div>

              {!isExpired ? (
                <button className="cursor-pointer w-full py-3 bg-warning-content hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors">
                  Join Group
                </button>
              ) : (
                <div className="text-center py-3 bg-gray-100 text-gray-600 rounded-lg">
                  This group is no longer active
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
