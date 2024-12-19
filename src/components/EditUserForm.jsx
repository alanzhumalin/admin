const EditUserForm = ({
  updatedProfile,
  setUpdatedProfile,
  handleUpdateProfile,
  setSelectedUser,
}) => {
  return (
    <div className="border p-4 rounded max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center sm:text-left">Edit User</h2>
      <input
        type="text"
        placeholder="First Name"
        value={updatedProfile.firstName}
        onChange={(e) =>
          setUpdatedProfile({ ...updatedProfile, firstName: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={updatedProfile.lastName}
        onChange={(e) =>
          setUpdatedProfile({ ...updatedProfile, lastName: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="text"
        placeholder="Profile Picture URL"
        value={updatedProfile.profilePictureUrl}
        onChange={(e) =>
          setUpdatedProfile({
            ...updatedProfile,
            profilePictureUrl: e.target.value,
          })
        }
        className="border p-2 mb-5 w-full rounded"
      />
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <button
          onClick={handleUpdateProfile}
          className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Save
        </button>
        <button
          onClick={() => setSelectedUser(null)}
          className="bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

  export default EditUserForm;
  