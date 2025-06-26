import React from 'react';
import { useNavigate } from 'react-router';
import { FaUsers, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const GroupCard = ({ group }) => {
  const navigate = useNavigate();

  const {
    _id,
    groupName,
    hobbyCategory,
    description,
    location,
    members,
    date,
    url,
  } = group || {};

  const today = new Date();
  const groupStartDate = new Date(date);
  const isExpired = today > groupStartDate;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div
      className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
      onClick={() => navigate(`/group/${_id}`)}
    >
      {/* Group Image */}
      <div className="relative h-48 w-full">
        <img
          src={url || 'https://via.placeholder.com/400x300?text=HobbyHub'}
          alt={groupName}
          className="h-full w-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-sm font-medium text-gray-800">{hobbyCategory}</span>
        </div>
        {/* Status Badge */}
        {!isExpired && (
          <div className="absolute top-3 right-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            Active
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{groupName}</h3>
        <p className="text-sm mb-3 line-clamp-2">{description}</p>

        {/* Group Metadata */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <FaUsers className="" />
            <span>{members || 0} members</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/group/${_id}`);
          }}
          className="cursor-pointer mt-4 w-full py-2 bg-warning-content hover:bg-yellow-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          View Group
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
