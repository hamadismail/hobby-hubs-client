import React from "react";
import Spinner from "../components/ui/Spinner";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";

const UpdateGroup = () => {
  const navigate = useNavigate();

  const group = useLoaderData();
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

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateHobby = Object.fromEntries(formData.entries());

    fetch(`https://hobby-hub-server-seven.vercel.app/hobbies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateHobby),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          navigate("/myGroups");
          Swal.fire({
            title: "Hobby Category updated successfully!",
            icon: "success",
            draggable: true,
          });

          form.reset();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto mb-12 p-6 bg-base-100 rounded-xl shadow-lg mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Update Group</h2>
      <form
        onSubmit={handleUpdateGroup}
        className="space-y-5 max-w-3xl mx-auto"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Group Name</label>
            <br />
            <input
              type="text"
              name="groupName"
              defaultValue={groupName}
              className="input input-bordered w-full"
              placeholder="Enter group name"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Hobby Category</label>
            <br />
            <select
              name="hobbyCategory"
              defaultValue={hobbyCategory}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
            </select>
          </div>
        </div>

        <div className="form-control">
          <label className="label font-semibold">Description</label>
          <br />
          <textarea
            name="description"
            defaultValue={description}
            className="textarea textarea-bordered w-full"
            placeholder="Brief description..."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Meeting Location</label>
            <br />
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="input input-bordered w-full"
              placeholder="Dhaka, Bangladesh"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Max Members</label>
            <br />
            <input
              type="number"
              name="members"
              defaultValue={members}
              className="input input-bordered w-full"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Start Date</label>
            <br />
            <input
              type="date"
              name="date"
              defaultValue={date}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <br />
            <input
              type="url"
              name="url"
              defaultValue={url}
              className="input input-bordered w-full"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">User Name</label>
            <br />
            <input
              type="text"
              className="input input-bordered bg-base-200 w-full"
              name="name"
              value={name}
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">User Email</label>
            <br />
            <input
              type="email"
              name="email"
              className="input input-bordered bg-base-200 w-full"
              value={email}
              readOnly
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <button type="submit" className="btn btn-outline w-full">
            Update Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateGroup;
