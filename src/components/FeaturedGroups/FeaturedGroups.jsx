import React from "react";
import GroupCard from "../GroupCard/GroupCard";

const FeaturedGroups = ({ groups }) => {
  const featured = groups.slice(0, 6);

  return (
    <section className="my-8 w-11/12 mx-auto bg-base-100">
      <h2 className="text-3xl font-bold text-center my-8">Featured Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGroups;
