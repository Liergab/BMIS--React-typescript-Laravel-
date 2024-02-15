import React           from 'react';
import toast           from 'react-hot-toast';
import { useSelector}  from 'react-redux';
import { RootState }   from '../../service/state/store';
import { DataGrid,
         GridCellParams,
         GridToolbar  } from '@mui/x-data-grid';

import { Button,
         CircularProgress,
        Typography,Box }             from '@mui/material';
import ThumbUpIcon                   from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon              from '@mui/icons-material/ThumbDownAlt';
import { ResidentVerificationTable } from '../../types';
import useApprovedResidentMutation   from '../../hooks/useApprovedResidentMutation';
import useDispprovedResidentMutation from '../../hooks/useDisapprovedResidentMutation';

import {FetchResidentPending } from '../../service/api/AdminQuery';


const VISIBLE_FIELDS = ['id', 'first_name', 'last_name', 'email'];

const VerrificationTable = () => {

  const{adminInfo} = useSelector((state:RootState) => state.admin);
  const token = adminInfo?.token;
  
  // Fetch Pending Resident
  const {data, isLoading} = FetchResidentPending()
  // Approve Pending Resident
  const { mutate: approveResident, 
          isPending:mutateLoading} = useApprovedResidentMutation();
  //DisApprove Pending Resident
  const { mutate: disapprovedResident, 
          isPending:DisApproveLoading } = useDispprovedResidentMutation()

  const handleApproved = async(id:number) => {
    try {
       await approveResident({id,token});
       console.log(id)
       toast.success('Approve Resident')
    } catch (error) {
      console.log(error)
    }
  }
  const handleDispproved = async(id:number) => {
    try {
       await disapprovedResident({id ,token});
       toast.error('DisApproved')
    } catch (error) {
      console.log(error)
    }
  }

  if(isLoading || mutateLoading || DisApproveLoading) return <CircularProgress />

  const rows = (Object.values(data)[0] as ResidentVerificationTable[])?.map((p:ResidentVerificationTable) => ({
    id: p?.id,
    first_name: p?.first_name,
    last_name: p?.last_name,
    email :p?.email,
  }));

  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      width: 150,
    })),
    {
      field: 'action',
      headerName: 'Action',
      width: 270,
      renderCell: (params: GridCellParams) => (
        <div className='flex gap-1'>
        <Button
          disabled={isLoading}
          variant="outlined"
          color="success"
          size="small"
          startIcon={<ThumbUpIcon />}
          onClick={() => handleApproved(params.row.id)}
        >
          Approve
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<ThumbDownAltIcon />}
          onClick={() => handleDispproved(params.row.id)}
        >
          DisApprove
        </Button>
        </div>
        
      ),
    },
  ];
  return (
    <React.Fragment>
      <div className='flex items-center w-full'>
      
      <Typography variant='h5' className='text-gray-dark' sx={{fontWeight:'600'}}>
          Verify Resident
      </Typography>
      
      </div>
      <Box sx={{  width: 1 }} className='bg-text h-[400px]  md:h-[500px] drop-shadow-xl p-4 border-0 rounded-lg'>
        <DataGrid
        rows={rows}
        columns={columns}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
      
    </React.Fragment>
  );
}

export default VerrificationTable