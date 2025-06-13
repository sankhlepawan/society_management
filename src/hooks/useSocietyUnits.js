// hooks/useSocietyUnits.ts
import { useQuery } from "@tanstack/react-query";
import { fetchSocietyUnits, fetchById } from "@/src/services/societyService";

export const useSocietyUnits = () =>
  useQuery({
    queryKey: ["society-units"],
    queryFn: fetchSocietyUnits,
    staleTime: 1000 * 60 * 10, // cache valid for 10 minutes
    retry: 1,
  });

export const useSocietyUnitById = (id) => {
  return useQuery({
    queryKey: ["society-unit", id],
    queryFn: () => fetchById(id),
    enabled: !!id, // only run if id exists
    staleTime: 1000 * 60 * 5,
  });
};
