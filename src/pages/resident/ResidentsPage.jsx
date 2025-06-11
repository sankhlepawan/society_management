import React, { useState } from "react";
import { ResidentTable, ResidentCard, SearchBar } from "@/src/components";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import residentsData from "@/src/data/residentsData";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const ResidentsPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [search, setSearch] = useState("");

  const filteredResidents = residentsData.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Residents</h2>
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
        <SearchBar value={search} onChange={setSearch} />
        <Link
          to="/residents/add"
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Add Resident"
        >
          <Plus className="w-5 h-5" />
        </Link>
      </div>

      {isMobile ? (
        <ResidentCard residents={filteredResidents} />
      ) : (
        <ResidentTable residents={filteredResidents} />
      )}
    </div>
  );
};

export default ResidentsPage;
