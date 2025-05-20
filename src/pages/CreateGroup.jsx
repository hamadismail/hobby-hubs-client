import React from "react";

const CreateGroup = () => {
  return (
    <div className="w-11/12 mx-auto my-12 p-6 bg-base-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">
        Create a New Group
      </h2>
      <form className="space-y-5 max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Group Name</label>
            <br />
            <input
              type="text"
              name="groupName"
              className="input input-bordered w-full"
              placeholder="Enter group name"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Hobby Category</label>
            <br />
            <select
              name="hobbyCategory"
              className="select select-bordered w-full"
            >
              <option disabled selected>
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
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <br />
            <input
              type="url"
              name="url"
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
              value="Hamad Ismail"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">User Email</label>
            <br />
            <input
              type="email"
              className="input input-bordered bg-base-200 w-full"
              value="hamad@email.com"
              readOnly
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <button className="btn btn-outline w-full">Create Group</button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
