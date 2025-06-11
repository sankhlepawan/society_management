import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { categories } from "@/src/constant";

export default function MaintenanceRequestForm({ onSubmit }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl mb-4 font-semibold">
        {t("submit_maintenance_request")}
      </h2>

      <label className="block mb-1 font-medium">{t("category")}</label>
      <select
        {...register("category", { required: true })}
        className="w-full mb-3 p-2 border rounded"
      >
        <option value="">{t("select_category")}</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {t(cat)}
          </option>
        ))}
      </select>
      {errors.category && (
        <p className="text-red-500 text-sm mb-2">Category is required.</p>
      )}

      <label className="block mb-1 font-medium">{t("description")}</label>
      <textarea
        {...register("description", { required: true })}
        rows={4}
        className="w-full mb-3 p-2 border rounded"
        placeholder={t("describe_the_issue")}
      ></textarea>
      {errors.description && (
        <p className="text-red-500 text-sm mb-2">{t("description_required")}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {t("submit")}
      </button>
    </form>
  );
}
