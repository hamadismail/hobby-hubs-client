import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Spinner from "../components/ui/Spinner";
import { FaUsers, FaEdit, FaInfoCircle, FaTrashAlt, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const MyGroup = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  if (!user) return <Spinner />;

  const groups = useLoaderData();
  const myGroups = groups.filter((group) => group.email === user.email);
  const [myHobbyGroups, setMyHobbyGroups] = useState(myGroups);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server-seven.vercel.app/hobbies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
              setMyHobbyGroups((prev) => prev.filter((group) => group._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Hobby Groups</h2>
        <button
          onClick={() => navigate("/dashboard/createGroup")}
          className="btn btn-primary flex items-center gap-2"
        >
          <FaPlus /> Create New Group
        </button>
      </div>

      {myHobbyGroups.length === 0 ? (
        <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <FaUsers className="text-5xl mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Groups Yet</h3>
          <p className="text-gray-500 mb-4">You haven't created any hobby groups.</p>
          <button
            onClick={() => navigate("/dashboard/createGroup")}
            className="btn btn-primary"
          >
            Create Your First Group
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Group Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Members
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {myHobbyGroups.map((group, index) => (
                  <tr key={group._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{group.groupName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {group.hobbyCategory}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {group.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {group.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {group.members}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => navigate(`/group/${group._id}`)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50 transition-colors"
                          title="View Details"
                        >
                          <FaInfoCircle className="h-4 w-4 cursor-pointer" />
                        </button>
                        <button
                          onClick={() => navigate(`/updateGroup/${group._id}`)}
                          className="text-yellow-600 hover:text-yellow-900 p-1 rounded-full hover:bg-yellow-50 transition-colors"
                          title="Edit"
                        >
                          <FaEdit className="h-4 w-4 cursor-pointer" />
                        </button>
                        <button
                          onClick={() => handleDelete(group._id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <FaTrashAlt className="h-4 w-4 cursor-pointer" />
                        </button>
                      </div>
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

export default MyGroup;
