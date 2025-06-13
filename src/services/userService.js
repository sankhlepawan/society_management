import { supabase } from "@/src/utils";

// Fetch societies
export const fetchProfile = async (uid) => {
  if (!uid) return;
  const { data, error } = await supabase
    .from("user_profile")
    .select("*")
    .eq("id", uid)
    .single();

  if (error) throw error;
  return data;
};

// Update a society
export const updateProfile = async (id, payload) => {
  const { data, error } = await supabase
    .from("user_profile")
    .update(payload)
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

export const generateSignedUrl = async () => {};
