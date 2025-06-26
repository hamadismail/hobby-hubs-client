import React, { use } from "react";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../providers/AuthContext";

const DashboardStats = () => {
  const {user} = use(AuthContext)
  const groups = useLoaderData();
  const userGroups = groups.filter((group) => group.email === user?.email); // Assuming user context

  // Calculate stats
  const totalGroups = userGroups.length;
  const totalMembers = userGroups.reduce((sum, group) => sum + parseInt(group.members), 0);
  const categories = [...new Set(userGroups.map((group) => group.hobbyCategory))];
  const locations = [...new Set(userGroups.map((group) => group.location))];

  // Stats cards data
  const stats = [
    {
      title: "Total Groups",
      value: totalGroups,
      icon: <FaLayerGroup className="text-2xl" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Members",
      value: totalMembers,
      icon: <FaUsers className="text-2xl" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Categories",
      value: categories.length,
      icon: <FaLayerGroup className="text-2xl" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Locations",
      value: locations.length,
      icon: <FaMapMarkerAlt className="text-2xl" />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${stat.color}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="p-3 rounded-full bg-white bg-opacity-50">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Groups Table (Simplified) */}
      {totalGroups > 0 && (
        <div className="mt-10 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="text-lg font-semibold p-4 border-b border-gray-200">
            Recent Groups
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Group
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Members
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userGroups.slice(0, 5).map((group) => (
                  <tr key={group._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {group.groupName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {group.hobbyCategory}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {group.members} members
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStats;
