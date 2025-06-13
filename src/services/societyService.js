import { supabase } from "@/src/utils";

// Fetch societies
export const fetchSocieties = async () => {
  const { data, error } = await supabase
    .from("society")
    .select("*")
    .eq("id", 1);
  if (error) throw error;
  return data;
};

export const fetchSocietyUnits = async () => {
  const { data, error } = await supabase.from("society_unit").select("*");
  if (error) throw error;
  return data;
};

export const fetchById = async (id) => {
  const { data, error } = await supabase
    .from("society_unit")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
