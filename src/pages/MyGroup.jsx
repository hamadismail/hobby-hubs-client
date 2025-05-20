import React, { use } from "react";
import GroupCard from "../components/GroupCard/GroupCard";
import { useLoaderData } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Spinner from "../components/ui/Spinner";
import { FaUsers } from "react-icons/fa6";

const MyGroup = () => {
  const { user } = use(AuthContext);
  if (!user) return <Spinner />;

  const groups = useLoaderData();
  const myGroups = groups.filter((group) => group.email === user.email);

  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore All Hobby Groups
      </h2>

      {myGroups.length === 0 ? (
        <div className="text-center bg-base-100 p-10 rounded-xl shadow-md">
          <FaUsers className="text-5xl mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-600">
            You haven't created any groups yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {myGroups.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGroup;
