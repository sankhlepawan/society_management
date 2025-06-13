import { ROLE_SP_ADMIN, ROLE_SP_USER } from "@/src/constant";
import { menus } from "@/src/data/menu";
import { supabase } from "@/src/utils";
import { jwtDecode } from "jwt-decode";
import config from "./config";

export const getMenu = async () => {
  const { data } = await supabase.auth.getSession();
  const session = data?.session;
  if (session) {
    const jwt = jwtDecode(session.access_token);
    const currentRole = jwt.user_role;
    if (!currentRole) return [];

    const filteredMenu = menus.filter((menu) =>
      menu.roles.includes(currentRole),
    );
    return filteredMenu;
  }
  return [];
};

export const uploadAvatar = async (file, filePath) => {
  const { data, error } = await supabase.storage
    .from(`${config.avatarBucket}`)
    .upload(filePath, file, {
      upsert: true,
    });
  if (error) {
    console.log("user avatar upload failed.", error);
  } else {
    console.log("user avatar upload.", data);
  }
  return data;
};

export const formatDate = (dateStr, options = {}) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);

  const defaultOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...options,
  };

  return new Intl.DateTimeFormat("en-IN", defaultOptions).format(date);
};
