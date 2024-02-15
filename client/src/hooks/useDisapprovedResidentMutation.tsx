import { useMutation, useQueryClient } from '@tanstack/react-query';
import {  DisapprovedPendingResident } from '../service/api/AdminQuery';
import { QUERY_KEYS } from '../service/api/queryKey';

const useDispprovedResidentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DisapprovedPendingResident,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PENDING_RESIDENT] });
    }
  });
};

export default useDispprovedResidentMutation;