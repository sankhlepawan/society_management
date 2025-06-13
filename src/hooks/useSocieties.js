import { useState, useEffect } from "react";
import { fetchSocieties } from "@/src/services/societyService";

export const useSocieties = () => {
  const [societies, setSocieties] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSocieties()
      .then(setSocieties)
      .finally(() => setLoading(false));
  }, []);

  return { societies, loading };
};
