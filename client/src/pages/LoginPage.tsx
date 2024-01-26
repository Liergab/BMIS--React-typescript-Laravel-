import { Box }             from '@mui/material';
import React, { useState } from 'react';
import login               from '../assets/images/login.jpg'
import '../components/Navbar/style.css';
import ResidentLoginComp   from '../components/ResidentLoginComp';
import ToggleLoginComp     from '../components/ToggleLoginComp';
import AdminLoginCom       from '../components/AdminLoginCom';

const LoginPage:React.FC = () => {
    const [is_ResidentShow, setResidentShow] = useState<boolean>(true)
    const [is_AdminShow, setAdminShow] = useState<boolean>(false)
    const [activeToggle, setActiveToggle] = useState<string>('resident');

    const handleToggle = (toggle:string) => {
        setResidentShow(false);
        setAdminShow(false);
        setActiveToggle(toggle);
      
        if (toggle === 'resident') setResidentShow(true);
        else if (toggle === 'admin') setAdminShow(true);
        
      };

  return (
    <>
    <Box className='flex rounded-md'>
        <div className='flex flex-[4]'>
           <img src={login} alt="" width={700} className=': bg-no-repeat bg-cover rounded-tl-2xl rounded-bl-2xl'/>
        </div>
        <div className='flex p-10 gap-2
                 flex-col space-y-4 flex-[2] bg-text rounded-tr-2xl rounded-br-2xl'>
            <Box 
            className='flex items-center
                justify-around bg-gray-light w-full h-10 rounded-3xl border-solid border-gray-dark'>
               <ToggleLoginComp handleToggle={handleToggle} activeToggle={activeToggle}/>
            </Box>
            {is_ResidentShow &&  <ResidentLoginComp/> }
            {is_AdminShow &&  <AdminLoginCom/> }
          
        </div>
    </Box>
    </>
  )
}

export default LoginPage