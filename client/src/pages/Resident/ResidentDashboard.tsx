import React           from 'react';
import ListButtonUI    from '../../components/UI/ListButtonUI'
import {Box, 
       List, 
       Typography }     from '@mui/material'
import NavBar           from '../../components/Navbar/NavBar'
import PeopleAltIcon    from '@mui/icons-material/PeopleAlt';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import FilterListIcon   from '@mui/icons-material/FilterList';
import BarChartIcon     from '@mui/icons-material/BarChart';
import SettingsIcon     from '@mui/icons-material/Settings';
import { BaranggayCert,
         ClearanceCert, 
         IndigencyCert, 
         Remainders,
         ResidentSettings} from '../../components/ResidentComponent';

const ResidentDashboard = () => {
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
                        label='Baranggay Certificate'
                        onItemClick={() => handleItemClick(0)}
                    />
                    <ListButtonUI 
                        icon={<AddModeratorIcon/>}
                        selnum={selectedIndex}
                        eventnum={1}
                        label='Baranggay Clearance'
                        onItemClick={() => handleItemClick(1)}
                    />
                    <ListButtonUI 
                        icon={<FilterListIcon/>}
                        selnum={selectedIndex}
                        eventnum={2}
                        label='Indigency'
                        onItemClick={() => handleItemClick(2)}
                    />
                    <ListButtonUI 
                        icon={<BarChartIcon/>}
                        selnum={selectedIndex}
                        eventnum={3}
                        label='Remainders'
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
            {selectedIndex === 0 && <BaranggayCert/>} 
            {selectedIndex === 1 && <ClearanceCert/>} 
            {selectedIndex === 2 && <IndigencyCert/>} 
            {selectedIndex === 3 && <Remainders/>} 
            {selectedIndex === 4 && <ResidentSettings/>} 
        </div>
    </div>
</Box>
  )
}

export default ResidentDashboard