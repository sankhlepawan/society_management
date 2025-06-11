import React, { useState } from "react";
import { ProfileCard, ProfileForm } from "@/src/components";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Pawan Sankhle",
    flat: "A-102",
    phone: "9876543210",
    email: "pawan@example.com",
    avatar: "/avatar.svg",
  });
  const [editing, setEditing] = useState(false);

  const handleUpdate = (data) => {
    // data.avatar will be a preview URL (or null)
    setUser((prev) => ({
      ...prev,
      ...data,
      avatar: data.avatar || prev.avatar,
    }));
    setEditing(false);
  };

  return (
    <div className="items-center p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        My Profile
      </h1>
      {editing ? (
        <ProfileForm user={user} onSubmit={handleUpdate} />
      ) : (
        <div className="">
          <ProfileCard user={user} />
          <button
            className="w-full mt-4 px-4 py-2 bg-gray-600 text-white rounded"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
