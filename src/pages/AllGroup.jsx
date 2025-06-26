import React from "react";
import GroupCard from "../components/GroupCard/GroupCard";
import { useLoaderData } from "react-router";

const AllGroup = () => {
  const groups = useLoaderData();
  return (
    <div className="w-11/12 mx-auto px-4 py-10 mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore All Hobby Groups
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
