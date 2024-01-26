import './Admin.css'
import React            from 'react';
import NavBar           from '../../components/Navbar/NavBar';
import { Box, 
        List, 
        Typography }    from '@mui/material';
import PeopleAltIcon    from '@mui/icons-material/PeopleAlt';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import FilterListIcon   from '@mui/icons-material/FilterList';
import BarChartIcon     from '@mui/icons-material/BarChart';
import SettingsIcon     from '@mui/icons-material/Settings';
import ListButtonUI     from '../../components/UI/ListButtonUI';


const AdminDashboard:React.FC = () => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

    const handleItemClick = ( index:number) => {
      setSelectedIndex(index);
    };

    const style1 = { 
         paddingTop: '150px' 
    }

  return (
    <Box className='relative w-full h-screen bg-cover bg-center text-white bg-image-Admin'>
        <NavBar/>
        <div className='flex h-screen'>
            <div className='flex-[2] w-full  justify-center  overscroll-y-auto overflow-y-auto scrollbar1 z-0 ' style={style1} >
                    <div className='flex flex-col items-center justify-between'>
                        <Typography className='text-gray-dark' sx={{fontWeight:'700'}}>
                            Welcom Admin
                        </Typography>
                    </div>
                    <List className='space-y-3'>
                        <ListButtonUI 
                            icon={<PeopleAltIcon/>}
                            selnum={selectedIndex}
                            evnum={0}
                            label='Resident'
                            onItemClick={() => handleItemClick(0)}
                        />
                        <ListButtonUI 
                            icon={<AddModeratorIcon/>}
                            selnum={selectedIndex}
                            evnum={1}
                            label='New Resident'
                            onItemClick={() => handleItemClick(1)}
                        />
                        <ListButtonUI 
                            icon={<FilterListIcon/>}
                            selnum={selectedIndex}
                            evnum={2}
                            label='Filter'
                            onItemClick={() => handleItemClick(2)}
                        />
                        <ListButtonUI 
                            icon={<BarChartIcon/>}
                            selnum={selectedIndex}
                            evnum={3}
                            label='Chart'
                            onItemClick={() => handleItemClick(3)}
                        />
                        <ListButtonUI 
                            icon={<SettingsIcon/>}
                            selnum={selectedIndex}
                            evnum={4}
                            label='Settings'
                            onItemClick={() => handleItemClick(4)}
                        />
                    </List>
            </div>
            <div className='flex-[8] bg-yellow'>
                 <h1>flex-2</h1>
            </div>
        </div>
    </Box>
  )
}

export default AdminDashboard