import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function Request() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset(); // clear form after submit
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {t("rais_a_request")}
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select Category</option>
            <option>Plumbing</option>
            <option>Electricity</option>
            <option>Cleaning</option>
            <option>Security</option>
            <option>Lift Issue</option>
            <option>Others</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows="4"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Urgency
          </label>
          <div className="flex gap-4">
            {["Low", "Medium", "High"].map((level) => (
              <label key={level} className="flex items-center space-x-1">
                <input
                  type="radio"
                  value={level}
                  {...register("urgency")}
                  defaultChecked={level === "Medium"}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {level}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Flat Number
          </label>
          <input
            {...register("flatNumber", { required: "Flat number is required" })}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          />
          {errors.flatNumber && (
            <p className="text-red-500 text-sm">{errors.flatNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Upload Image (optional)
          </label>
          <input
            type="file"
            {...register("image")}
            accept="image/*"
            className="dark:text-gray-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </>
  );
}
