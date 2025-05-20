import React from "react";
import GroupCard from "../components/GroupCard/GroupCard";

const groups = [
  {
    id: 1,
    title: "Book Club",
    category: "Reading",
    country: "USA",
    image: "https://source.unsplash.com/600x400/?books,reading",
    location: "Banani, Dhaka",
    startDate: "June 10, 2025",
    members: 14,
    maxMembers: 20,
  },
  {
    id: 2,
    title: "Photography Enthusiasts",
    category: "Photography",
    country: "USA",
    image: "https://source.unsplash.com/600x400/?camera,photography",
    location: "Gulshan Park, Dhaka",
    startDate: "June 15, 2025",
    members: 10,
    maxMembers: 15,
  },
  {
    id: 3,
    title: "Cooking Club",
    category: "Cooking",
    country: "USA",
    image: "https://source.unsplash.com/600x400/?cooking,food",
    location: "Dhanmondi, Dhaka",
    startDate: "July 1, 2025",
    members: 8,
    maxMembers: 12,
  },
  // Add more group objects as needed
];

const MyGroup = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore All Hobby Groups
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, idx) => (
          <GroupCard key={idx} group={group} />
        ))}
      </div>
    </div>
  );
};

export default MyGroup;
