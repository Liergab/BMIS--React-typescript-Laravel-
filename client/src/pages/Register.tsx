import { Box }            from '@mui/material';
import React              from 'react';
import resSign         from '../assets/images/Res-Signup.jpg'
import ResidentSigninComp from '../components/ResidentSigninComp';

const Register:React.FC = () => {
  return (
    <>
    <Box className='flex rounded-md'>
        <div className='flex flex-[4]'>
           <img src={resSign} alt="" width={700} className='bg-no-repeat bg-cover rounded-tl-2xl rounded-bl-2xl'/>
        </div>
        <div className='flex p-10 gap-2
                 flex-col space-y-4 flex-[2] bg-text rounded-tr-2xl rounded-br-2xl'>
            <ResidentSigninComp/> 
        </div>
    </Box>
    </>
  )
}

export default Register