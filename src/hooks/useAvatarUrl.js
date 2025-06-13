// src/hooks/useAvatarUrl.ts
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/src/utils";
import config from "@/src/utils/config";

export const useAvatarUrl = (filePath) => {
  return useQuery({
    queryKey: ["avatar-url", filePath],
    queryFn: async () => {
      if (!filePath) return null;
      const { data, error } = await supabase.storage
        .from(config.avatarBucket)
        .createSignedUrl(filePath, 3600);
      if (error) throw new Error("Failed to fetch avatar URL");
      return data.signedUrl;
    },
    enabled: !!filePath, // only runs when filePath is not null/undefined
    staleTime: 1000 * 60 * 5, // cache for 5 mins
    cacheTime: 1000 * 60 * 10, // keep in cache for 10 mins
  });
};
