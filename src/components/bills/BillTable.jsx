import React from "react";

const BillTable = ({ bills }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100 text-gray-500">
          <tr>
            <th className="px-4 py-3">Month</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Due Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id} className="border-t">
              <td className="px-4 py-3">{bill.month}</td>
              <td className="px-4 py-3">{bill.amount}</td>
              <td className="px-4 py-3">{bill.dueDate}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    bill.status === "Paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {bill.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillTable;
