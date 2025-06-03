import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Flat: {user.flat}
          </p>
        </div>
      </div>
      <div className="text-gray-700 dark:text-gray-200 space-y-1">
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Edit Profile
      </button> */}
    </div>
  );
};

export default ProfileCard;
