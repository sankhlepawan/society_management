import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "@/src/services";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }) => updateProfile(id, updates),
    onSuccess: (data, variables) => {
      // Update or invalidate profile data
      queryClient.invalidateQueries(["user-profile", variables.id]);

      // Optionally update cache directly:
      // queryClient.setQueryData(["user-profile", variables.id], data);
    },
  });
};
