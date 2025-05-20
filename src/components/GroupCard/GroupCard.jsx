import React from "react";
import { useNavigate } from "react-router";

const GroupCard = ({ group }) => {
  const navigate = useNavigate();
  return (
    <div className="card shadow-md hover:shadow-xl transition">
      <figure>
        <img
          src={group.img}
          alt={group.title}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg">{group.title}</h3>
        <p className="text-sm">{group.description}</p>
        <div className="mt-2 text-xs">🌍 {group.country}</div>
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
