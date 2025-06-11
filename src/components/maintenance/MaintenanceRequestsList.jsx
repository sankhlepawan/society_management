import React from "react";
import { useTranslation } from "react-i18next";

export default function MaintenanceRequestsList({ requests }) {
  const { t } = useTranslation();

  if (!requests.length) {
    return <p className="text-center mt-4">{t("no_data")}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-4">
      {requests.map(({ id, category, description, status, createdAt }) => (
        <div
          key={id}
          className="border p-4 rounded mb-4 bg-white shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{category}</h3>
            <p>{description}</p>
            <small className="text-gray-500">
              {t("submitted_on")} {new Date(createdAt).toLocaleString()}
            </small>
          </div>
          <div
            className={`px-3 py-1 rounded text-white font-semibold ${
              status === "Open"
                ? "bg-red-500"
                : status === "In Progress"
                  ? "bg-yellow-500"
                  : "bg-green-500"
            }`}
          >
            {status}
          </div>
        </div>
      ))}
    </div>
  );
}
