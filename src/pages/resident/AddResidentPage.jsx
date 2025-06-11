import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AddResidentPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Resident data:", data);
    // TODO: send to backend
    reset();
  };

  const { t } = useTranslation();

  const resident_type = ["tenant", "owner"];

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">{t("add_new_resident")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder={t("full_name")}
          {...register("name", { required: t("name_required") })}
          className="w-full border p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          placeholder={t("flat_no")}
          {...register("flat", { required: t("flat_no_required") })}
          className="w-full border p-2 rounded"
        />
        {errors.flat && (
          <p className="text-red-500 text-sm">{errors.flat.message}</p>
        )}

        <input
          placeholder={t("phone_number")}
          {...register("phone", {
            required: t("phone_number_required"),
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter valid 10-digit number",
            },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}

        <input
          placeholder={t("email")}
          {...register("email", {
            required: t("email_required"),
            pattern: { value: /^\S+@\S+$/i, message: t("invalid_email") },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <select
          {...register("resident_type", { required: true })}
          className="w-full mb-3 p-2 border rounded"
        >
          <option value="">{t("resident_type")}</option>
          {resident_type.map((cat) => (
            <option key={cat} value={cat}>
              {t(cat)}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm mb-2">
            {t("resident_type_required")}
          </p>
        )}

        <div className="flex flex-row gap-2">
          <Link
            to="/residents"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            aria-label="Cancel"
            about="Cancel"
          >
            {t("cancel")}
          </Link>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {t("add_resident")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddResidentPage;
