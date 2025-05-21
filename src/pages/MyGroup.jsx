import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Spinner from "../components/ui/Spinner";
import { FaUsers } from "react-icons/fa6";
import { FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
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
        fetch(`http://localhost:3000/hobbies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
            // Update the state after deletion
            setMyHobbyGroups((prev) =>
              prev.filter((group) => group._id !== id)
            );
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore All Hobby Groups
      </h2>

      {myHobbyGroups.length === 0 ? (
        <div className="text-center bg-base-100 p-10 rounded-xl shadow-md">
          <FaUsers className="text-5xl mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-600">
            You haven't created any groups yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
          <table className="table w-full text-sm">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>#</th>
                <th>Group Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>Max Members</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myHobbyGroups.map((group, index) => (
                <tr key={group._id} className="hover">
                  <td>{index + 1}</td>
                  <td className="font-medium">{group.groupName}</td>
                  <td>{group.hobbyCategory}</td>
                  <td>{group.location}</td>
                  <td>{group.date}</td>
                  <td>{group.members}</td>
                  <td className="flex gap-2 justify-center items-center py-2">
                    <button
                      onClick={() => navigate(`/group/${group._id}`)}
                      className="btn btn-sm flex items-center gap-1"
                    >
                      <FaInfoCircle className="text-sm" />
                    </button>
                    <button
                      onClick={() => navigate(`/updateGroup/${group._id}`)}
                      className="btn btn-sm flex items-center gap-1"
                    >
                      <FaEdit className="text-sm" />
                    </button>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-sm text-error flex items-center gap-1"
                    >
                      <FaTrashAlt className="text-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroup;
