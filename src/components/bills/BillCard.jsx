import React from "react";

const BillCard = ({ month, amount, dueDate, status }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{month}</h2>
        <span
          className={`text-sm font-medium px-2 py-1 rounded ${
            status === "Paid"
              ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white"
              : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-white"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
        Amount: {amount}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">Due: {dueDate}</p>
    </div>
  );
};

export default BillCard;
