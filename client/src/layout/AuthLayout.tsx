import React    from 'react';
import {Box}    from '@mui/material';
import {Outlet} from 'react-router-dom';
import './AuthStyle.css';
import LandingNavComp from '../components/LandingNavComp';

const AuthLayout:React.FC = () => {
  return (
  <>
    <Box className='relative w-full h-full bg-cover bg-center text-white bg2-image' > 
    <div className="flex flex-col  h-full py-[80px] md:py-[50px] gap-10 md:gap-0">
        <div className="flex justify-between items-center px-[20px] md:px-[200px]">
          <LandingNavComp />
        </div>
      <Box className="flex flex-col md:flex md:flex-row h-screen items-center justify-center px-[14px] md:px-28 mt-4 md:mt-8">
          <Outlet/>
      </Box> 
      </div>
    </Box>
  </>
  )
}

export default AuthLayout