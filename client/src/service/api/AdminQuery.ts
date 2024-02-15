import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKey';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const FetchResidentPending = () => {
    const {data, isLoading, isError} =  useQuery({
        queryKey:[QUERY_KEYS.GET_PENDING_RESIDENT],
        queryFn: async() => {
            const response = await axios.get(`${apiUrl}/resident/pending`)
            return response.data
        }
    })
    return {data, isLoading, isError}
};

export const FetchResidentApproved = ({token}:{token:string}) => {
    const {data, isLoading} = useQuery({
        queryKey:[QUERY_KEYS.GET_APPROVED_RESIDENT],
        queryFn: async () => {
            const response = await axios.get(`${apiUrl}/admin/approved`,{
                headers:{
                    'content-type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            });
            return response.data
        }
    })
    return {data,isLoading}
};

export const ApprovedPendingResident = async({ id, token }: { id: number; token: string }) => {
     await axios.put(`${apiUrl}/admin/residents/${id}/update-status`,{status:"approved"},{
        headers:{
            'content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
   
};

export const DisapprovedPendingResident = async({ id, token }: { id: number; token: string }) => {
    await axios.put(`${apiUrl}/admin/residents/${id}/update-status`,{status:"disapproved"},{
       headers:{
           'content-type' : 'application/json',
           'Authorization' : `Bearer ${token}`
       }
   });
  
};