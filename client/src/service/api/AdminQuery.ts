import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKey';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

//Get Reident Pending
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

//Fetch Resident Approved
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

//Approved resident (update)
export const ApprovedPendingResident = async({ id, token }: { id: number; token: string }) => {
     await axios.put(`${apiUrl}/admin/residents/${id}/update-status`,{status:"approved"},{
        headers:{
            'content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
   
};

//Disapproved resident (update)
export const DisapprovedPendingResident = async({ id, token }: { id: number; token: string }) => {
    await axios.put(`${apiUrl}/admin/residents/${id}/update-status`,{status:"disapproved"},{
       headers:{
           'content-type' : 'application/json',
           'Authorization' : `Bearer ${token}`
       }
   });
  
};

//GetReident by Id
export const FetchResidentById = ({id,token}:{id:number | null ,token:string}) => {
    const {data, isLoading} = useQuery({
        queryKey:[QUERY_KEYS.GET_RESIDENT_BY_ID, id],
        queryFn: async () => {
            const response = await axios.get(`${apiUrl}/admin/resident/${id}`,{
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