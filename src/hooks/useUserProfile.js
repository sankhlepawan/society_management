import { fetchProfile } from "@/src/services/userService";

import { useQuery } from "@tanstack/react-query";

export const useUserProfile = (id) =>
  useQuery({
    queryKey: ["user-profile", id],
    queryFn: () => fetchProfile(id),
    staleTime: 1000 * 60 * 10, // cache valid for 10 minutes
    retry: 1,
  });
