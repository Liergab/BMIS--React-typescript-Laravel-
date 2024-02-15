import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ApprovedPendingResident } from '../service/api/AdminQuery';
import { QUERY_KEYS } from '../service/api/queryKey';

const useApprovedResidentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ApprovedPendingResident,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PENDING_RESIDENT] });
    }
  });
};

export default useApprovedResidentMutation;