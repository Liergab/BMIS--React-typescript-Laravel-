import React    from 'react';
import {Box}    from '@mui/material';
import {Outlet} from 'react-router-dom';
import NavBar   from '../components/Navbar/NavBar';
import './AuthStyle.css';

const AuthLayout:React.FC = () => {
  return (
  <>
    <Box className='relative w-full h-screen bg-cover bg-center text-white bg2-image' > 
    <NavBar/>
      <Box className='lg:flex-1 flex flex-col w-full h-screen items-center place-content-center px-4 pt-28'>
          <Outlet/>
      </Box> 
    </Box>
  </>
  )
}

export default AuthLayout