import React, { useEffect, useState } from "react";
import { ProfileCard, ProfileForm } from "@/src/components";
import { useUserProfile, useUpdateProfile } from "@/src/hooks";
import { Skeleton } from "@/components/ui";
import { useAuth } from "@/src/context";
const ProfilePage = () => {
  const { user: authUser, loading } = useAuth();

  const { data: profile, isLoading, isError } = useUserProfile(authUser.id);
  const { mutate: updateProfileMutation, isPending: updating } =
    useUpdateProfile();

  const [user, setUser] = useState(profile);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setUser(profile);
    }
  }, [isLoading]);

  const handleUpdate = async (data) => {
    const updates = {
      avatar: data.bucket?.avatar,
      phone: data.phone,
      email: data.email,
    };
    updateProfileMutation(
      { id: profile.id, updates },
      {
        onSuccess: (data) => {
          console.log("Updated:", data);
          // show toast or redirect if needed
        },
        onError: (err) => {
          console.error("Update failed:", err);
        },
      },
    );
    setEditing(false);
  };

  if (isLoading) return <Skeleton />;

  if (isError) return <p>Error loading units</p>;

  return (
    <div className="items-center max-w-xl mx-auto justify-center">
      {/* <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        My Profile
      </h1> */}
      {editing ? (
        <ProfileForm
          user={user}
          onSubmit={handleUpdate}
          onCancel={() => {
            setEditing(false);
          }}
        />
      ) : (
        <div className="">
          <ProfileCard
            user={user}
            onEdit={() => {
              setEditing(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
