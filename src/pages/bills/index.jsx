import React from "react";
import BillTable from "@/components/bills/BillTable";
import BillCard from "@/components/bills/BillCard";
import { bills } from "@/data/bills";

const BillsPage = () => {
  return (
    <>
      {/* Table for medium and larger screens */}
      <div className="hidden md:block">
        <BillTable bills={bills} />
      </div>

      {/* Cards for small screens */}
      <div className="block md:hidden space-y-4">
        {bills.map((bill) => (
          <BillCard key={bill.id} {...bill} />
        ))}
      </div>
    </>
  );
};

export default BillsPage;
