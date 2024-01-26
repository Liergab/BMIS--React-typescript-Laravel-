import './Admin.css'
import React            from 'react';
import NavBar           from '../../components/Navbar/NavBar';
import { Box, 
        Button, 
        List, 
        Typography }    from '@mui/material';
import PeopleAltIcon    from '@mui/icons-material/PeopleAlt';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import FilterListIcon   from '@mui/icons-material/FilterList';
import BarChartIcon     from '@mui/icons-material/BarChart';
import SettingsIcon     from '@mui/icons-material/Settings';
import ListButtonUI     from '../../components/UI/ListButtonUI';
import ResidentTable    from '../../components/AdminComponent/ResidentTable';
import VerificationTable from '../../components/AdminComponent/VerificationTable';
import FilterTable from '../../components/AdminComponent/FilterTable';
import BarchartTable from '../../components/AdminComponent/BarchartTable';
import SettingsTable from '../../components/AdminComponent/SettingsTable';



const AdminDashboard:React.FC = () => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

    const handleItemClick = ( index:number) => {
      setSelectedIndex(index);
    };

 

  return (
    <Box className='relative w-full h-screen bg-cover bg-center text-white bg-image-Admin'>
        <NavBar/>
        <div className='flex h-screen'>
            <div className='flex-[2] w-full bg-text justify-center overscroll-y-auto overflow-y-auto scrollbar1 z-0 border-solid border-r-8  border-r-bg-purple container_padding'>
                    <div className='flex flex-col items-center justify-between'>
                        <Typography className='text-gray-dark' sx={{fontWeight:'700', marginTop:'20px'}}>
                            Welcom Admin
                        </Typography>
                    </div>
                    <List className='space-y-3'>
                        <ListButtonUI 
                            icon={<PeopleAltIcon/>}
                            selnum={selectedIndex}
                            eventnum={0}
                            label='Resident'
                            onItemClick={() => handleItemClick(0)}
                        />
                        <ListButtonUI 
                            icon={<AddModeratorIcon/>}
                            selnum={selectedIndex}
                            eventnum={1}
                            label='New Resident'
                            onItemClick={() => handleItemClick(1)}
                        />
                        <ListButtonUI 
                            icon={<FilterListIcon/>}
                            selnum={selectedIndex}
                            eventnum={2}
                            label='Filter'
                            onItemClick={() => handleItemClick(2)}
                        />
                        <ListButtonUI 
                            icon={<BarChartIcon/>}
                            selnum={selectedIndex}
                            eventnum={3}
                            label='Chart'
                            onItemClick={() => handleItemClick(3)}
                        />
                        <ListButtonUI 
                            icon={<SettingsIcon/>}
                            selnum={selectedIndex}
                            eventnum={4}
                            label='Settings'
                            onItemClick={() => handleItemClick(4)}
                        />
                    </List>
            </div>
            <div className='flex-[8] flex flex-col gap-10 items-center justify-center py-10 px-20 container_padding'>
                {selectedIndex === 0 && <ResidentTable/>} 
                {selectedIndex === 1 && <VerificationTable/>} 
                {selectedIndex === 2 && <FilterTable/>} 
                {selectedIndex === 3 && <BarchartTable/>} 
                {selectedIndex === 4 && <SettingsTable/>} 
            </div>
        </div>
    </Box>
  )
}

export default AdminDashboard