import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfileForm = ({ user, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ defaultValues: user });

  // For image preview
  const [preview, setPreview] = useState(user.avatar || null);
  const avatarFile = watch("avatar");

  useEffect(() => {
    if (avatarFile && avatarFile.length > 0) {
      const file = avatarFile[0];
      if (file instanceof Blob) {
        // <-- Add this check
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
      }
    } else {
      setPreview(user.avatar || null);
    }
  }, [avatarFile, user.avatar]);

  const handleFormSubmit = (data) => {
    // If you want to send file separately or convert to base64 here before onSubmit
    onSubmit({ ...data, avatar: preview });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div className="flex flex-col items-center">
        <img
          src={preview || "/default-avatar.svg"}
          alt="Avatar Preview"
          className="w-24 h-24 rounded-full mb-2 object-cover"
        />
        <input
          type="file"
          accept="image/*"
          {...register("avatar")}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0 file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:text-white"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Flat Number
        </label>
        <input
          {...register("flat")}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Phone
        </label>
        <input
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:text-white"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ProfileForm;
