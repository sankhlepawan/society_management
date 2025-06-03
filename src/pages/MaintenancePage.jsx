import React, { useState } from "react";
import {
  MaintenanceRequestForm,
  MaintenanceRequestsList,
} from "@/components/maintenance";

export default function MaintenancePage() {
  const [requests, setRequests] = useState([]);

  const handleSubmit = (data) => {
    const newRequest = {
      id: Date.now().toString(),
      category: data.category,
      description: data.description,
      status: "Open",
      createdAt: new Date().toISOString(),
    };
    setRequests([newRequest, ...requests]);
    alert("Maintenance request submitted!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <MaintenanceRequestForm onSubmit={handleSubmit} />
      <MaintenanceRequestsList requests={requests} />
    </div>
  );
}
