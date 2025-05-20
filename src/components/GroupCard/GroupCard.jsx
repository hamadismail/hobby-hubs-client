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
          <button
            onClick={() => navigate("/group/1")}
            className="btn btn-sm btn-outline"
          >
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
