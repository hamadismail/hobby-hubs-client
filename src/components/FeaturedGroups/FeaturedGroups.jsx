import React from "react";
import GroupCard from "../GroupCard/GroupCard";

const FeaturedGroups = () => {
  const groups = [
    {
      title: "Book Club Dhaka",
      country: "Bangladesh",
      description: "A group for readers who meet weekly to discuss novels.",
      img: "https://source.unsplash.com/600x400/?books,library",
    },
    {
      title: "Hiking Crew USA",
      country: "USA",
      description: "Join our weekend hiking adventures across state trails.",
      img: "https://source.unsplash.com/600x400/?hiking,mountains",
    },
    {
      title: "Painting Circle Berlin",
      country: "Germany",
      description: "Meet artists, share techniques, and create together.",
      img: "https://source.unsplash.com/600x400/?painting,art",
    },
    {
      title: "Photography Walks",
      country: "Japan",
      description: "City walks and landscape shoots for photography lovers.",
      img: "https://source.unsplash.com/600x400/?photography,street",
    },
    {
      title: "Chess & Coffee",
      country: "UK",
      description: "Friendly chess games over a cup of coffee every Friday.",
      img: "https://source.unsplash.com/600x400/?chess,coffee",
    },
    {
      title: "Yoga in Nature",
      country: "India",
      description: "Relax and connect through yoga in green spaces.",
      img: "https://source.unsplash.com/600x400/?yoga,nature",
    },
    // ...more groups
  ];

  const featured = groups.slice(0, 6);

  return (
    <section className="my-8 w-11/12 mx-auto bg-base-100">
      <h2 className="text-3xl font-bold text-center my-8">Featured Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((group, idx) => (
          <GroupCard key={idx} group={group} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGroups;
