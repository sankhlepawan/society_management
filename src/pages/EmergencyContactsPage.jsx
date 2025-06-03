// src/pages/EmergencyContacts.jsx
import React from "react";
import EmergencyContactCard from "@/components/EmergencyContactCard";
import { emergencyContacts } from "@/data/emergency";

const EmergencyContactsPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Emergency Contacts
      </h2>
      <div className="flex flex-wrap justify-center">
        {emergencyContacts.map((contact) => (
          <EmergencyContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default EmergencyContactsPage;
