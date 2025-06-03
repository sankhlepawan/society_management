// src/components/EmergencyContactCard.jsx
import React from "react";

const EmergencyContactCard = ({ name, number, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-2 w-full sm:w-60 cursor-pointer hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={`tel:${number}`}
        className="mt-2 inline-block text-blue-600 dark:text-blue-400 font-medium"
      >
        Call: {number}
      </a>
    </div>
  );
};

export default EmergencyContactCard;
