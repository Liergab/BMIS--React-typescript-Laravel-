import View from './modal/View';
import { DataGrid,
         GridToolbar }    from '@mui/x-data-grid';
import { GridCellParams } from '@mui/x-data-grid';

import { Button,
         CircularProgress, 
         Typography,
         Box     }          from '@mui/material';

import React, { useEffect, useState }  from 'react';
import EditIcon             from '@mui/icons-material/Edit';
import VisibilityIcon       from '@mui/icons-material/Visibility';
import PersonAddIcon        from '@mui/icons-material/PersonAdd';
import EditResident         from './modal/EditResident';
import { useSelector }      from 'react-redux';
import { RootState }        from '../../service/state/store';
import { FetchResidentApproved} from '../../service/api/AdminQuery';
import { ResidentTable as Resident } from '../../types';

const VISIBLE_FIELDS = ['id', 'first_name', 'last_name', 'email'];



const ResidentTable = () => {
  //fetch token from redux
  const {adminInfo} = useSelector((state:RootState) => state.admin)
  const token = adminInfo?.token;
  // View state
  const [openView,setOpenView] = useState<boolean>(false)
  const [idView, setIdView] = useState<number | null>(null)

  // Edit state
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [idEdit, setIdEdit] = useState<number | null>(null)

  // query for  fetching datd
  const {data, isLoading} = FetchResidentApproved({token})

  if(isLoading) return <CircularProgress />
  const rows = (Object.values(data)[0] as Resident[])?.map((p:Resident) => ({
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
      width: 180,
      renderCell: (params: GridCellParams) => (
        <div className='flex gap-1'>
        <Button
          variant="outlined"
          color="success"
          size="small"
          startIcon={<EditIcon />}
          onClick={() => handleEdit(params.row.id)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="success"
          size="small"
          startIcon={<VisibilityIcon />}
          onClick={() => handleView(params.row.id)}
        >
          View
        </Button>
        </div>
        
      ),
    },
  ];

  

  const handleView = (id:number) => {
    setOpenView((prev) => !prev)
    setIdView(id)
  }

  const handleEdit = (id:number) => {
    setOpenEdit((prev) => !prev)
    setIdEdit(id)
  }

  return (
    <React.Fragment>
      <div className='flex items-center justify-between w-full'>
      
      <Typography variant='h5' className='text-gray-dark' sx={{fontWeight:'600'}}>
          Resident Table
      </Typography>
        <Button 
          variant="outlined" 
          color='primary' 
          startIcon={<PersonAddIcon/>} >
            <span className=' font-medium'>
              Add
            </span>
        </Button>
      
      </div>
      <Box sx={{  width: 1 }} className='bg-text  h-[400px]  md:h-[500px] drop-shadow-xl p-4 border-0 rounded-lg'>
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
      {openView && <View openView={openView} setOpenView={setOpenView} id={idView} setidView={setIdView}/>}
      {openEdit && <EditResident openEdit={openEdit} setOpenEdit={setOpenEdit} id={idEdit}/>}
    </React.Fragment>
  );
}

export default ResidentTable