import React from "react";
import { useNavigate } from "react-router";

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
    name,
    email,
  } = group || {};

  const today = new Date();
  const groupStartDate = new Date(date);
  const isExpired = today > groupStartDate;

  return (
    <div className="card shadow-md hover:shadow-xl transition">
      <figure>
        <img src={url} alt={groupName} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg">{groupName}</h3>
        <p className="text-sm">{description}</p>
        <div className="mt-2 text-xs">🌍 {location}</div>
        <div className="card-actions justify-end mt-4">
          {!isExpired && <p className="text-success">Ongoing</p>}
          <button
            onClick={() => navigate(`/group/${_id}`)}
            className="btn btn-sm btn-outline"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
