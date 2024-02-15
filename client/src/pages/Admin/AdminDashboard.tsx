import './Admin.css'
import React             from 'react';
import { Box, 
        List, 
        Typography }     from '@mui/material';
import PeopleAltIcon     from '@mui/icons-material/PeopleAlt';
import AddModeratorIcon  from '@mui/icons-material/AddModerator';
import FilterListIcon    from '@mui/icons-material/FilterList';
import BarChartIcon      from '@mui/icons-material/BarChart';
import SettingsIcon      from '@mui/icons-material/Settings';
import ListButtonUI      from '../../components/UI/ListButtonUI';
import ResidentTable     from '../../components/AdminComponent/ResidentTable';
import VerificationTable from '../../components/AdminComponent/VerificationTable';
import FilterTable       from '../../components/AdminComponent/FilterTable';
import BarchartTable     from '../../components/AdminComponent/BarchartTable';
import SettingsTable     from '../../components/AdminComponent/SettingsTable';
import logo              from '../../assets/images/logo.png'
import LogoutIcon        from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ToggleIconUI      from '../../components/UI/ToggleIconUI';
import BottomNavUI       from '../../components/UI/BottomNavUI';


const AdminDashboard:React.FC = () => {

    const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

    const handleItemClick = ( index:number) => {
      setSelectedIndex(index);
    };

  return (
    <Box className='relative w-full h-screen bg-cover bg-center text-white bg-image-Admin'>
        <div className='flex flex-col md:flex md:flex-row gap-2 h-screen p-3  '>
            <div className='hidden flex-[2] md:block w-full h-full bg-text rounded-md justify-center overscroll-y-auto overflow-y-auto scrollbar1 z-0 border-solid border-r-8  border-r-bg-purple container_padding'>
                    <div>
                        <div className="flex items-center py-5">
                            <img src={logo} alt="" width='50px' />
                            <h1 className="logo font-bold text-2xl">BMIS</h1>
                        </div>
                    </div>
                    <hr className='text-gray'/>
                    <div className='flex flex-col items-center justify-between mt-8'>
                        <Typography className='text-gray' sx={{fontWeight:'700',}}>
                            Welcom Admin
                        </Typography> 
                    </div>
                    <div className='mt-[30px]'>
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
            </div>
            <div className='flex-[8] flex flex-col gap-3 md:gap-5'>
                <div className='flex-[1] flex flex-row-reverse items-center justify-between md:justify-start py-1 md:py-4 rounded-md px-4  md:px-10 bg-text'>
                    <div className='flex gap-2 md:gap-10'>
                        <ToggleIconUI
                            icon={<NotificationsIcon 
                            sx={{
                                color:'#8492a6',
                                fontSize:'24px',
                                '@media (max-width: 600px)': {
                                    fontSize: '18px',
                                },
                            }}/>}
                         />
                        <ToggleIconUI 
                            icon={<LogoutIcon 
                            sx={{
                                color:'#8492a6',
                                fontSize:'24px',
                                '@media (max-width: 600px)': {
                                    fontSize: '18px',
                                },
                            }}/>}
                            />
                    </div>
                    <div className='flex md:hidden'>
                        <div className="flex items-center">
                            <img src={logo} alt="" width='30px' />
                            <h1 className="logo font-bold text-lg">BMIS</h1>
                        </div>
                    </div>
                </div>
                <div className='flex-[12] flex flex-col  items-center gap-4 justify-center p-0 md:p-4 rounded-xl'>
                    {selectedIndex === 0 && <ResidentTable/>} 
                    {selectedIndex === 1 && <VerificationTable/>} 
                    {selectedIndex === 2 && <FilterTable/>} 
                    {selectedIndex === 3 && <BarchartTable/>} 
                    {selectedIndex === 4 && <SettingsTable/>} 
                </div>
                <div className='flex items-center flex-[1] md:hidden '>
                    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} className='w-full py-2 px-4'>
                        <div className='flex justify-between items-center bg-text py-2 px-5 rounded-md'>
                            <BottomNavUI 
                                icon={<PeopleAltIcon/>}
                                label="Resident"
                                eventnum={0}
                                selnum={selectedIndex}
                                onItemClick={() => handleItemClick(0)}
                            />
                            <BottomNavUI 
                                icon={<AddModeratorIcon/>}
                                label="Verify"
                                eventnum={1}
                                selnum={selectedIndex}
                                onItemClick={() => handleItemClick(1)}
                            />
                            <BottomNavUI 
                                icon={<FilterListIcon/>}
                                label="filter"
                                eventnum={2}
                                selnum={selectedIndex}
                                onItemClick={() => handleItemClick(2)}
                            />
                            <BottomNavUI 
                                icon={<BarChartIcon/>}
                                label="chart"
                                eventnum={3}
                                selnum={selectedIndex}
                                onItemClick={() => handleItemClick(3)}
                            />
                            <BottomNavUI
                                icon={<SettingsIcon/>}
                                label="settings"
                                eventnum={4}
                                selnum={selectedIndex}
                                onItemClick={() => handleItemClick(4)}
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    </Box>
  )
}

export default AdminDashboard