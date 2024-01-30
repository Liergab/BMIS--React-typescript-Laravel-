// import React from 'react'
import './style.css'
import LandingNavComp from '../components/LandingNavComp';
import contact        from '../assets/images/contact-img.png';
import { 
        Button, 
        TextField }   from '@mui/material';

const ContactPage = () => {
  return (
    <div className="flex flex-col  h-full w-full py-[50px]">
    <div className="flex justify-between items-center px-[200px]">
      <LandingNavComp />
    </div>
    <div className=" flex h-full items-center  justify-start px-28">
        <div className='flex-1 flex items-center justify-center'>
            <img src={contact}  alt="" className='w-[700px]' />
        </div>
        <div className='flex-1 flex flex-col items-center  justify-start gap-4 py-2'>
            <h1 className="text-text text-2xl font-bold logo">CONTACT US</h1>
            <div className=' p-14 border-2 bg-text border-text rounded-lg'>
                <form className='flex flex-col gap-4 '>
                <TextField
                    id="outlined-basic" 
                    variant="filled" 
                    placeholder='Email'  
                />
                <TextField 
                    id="outlined-basic" 
                    variant="filled" 
                    placeholder='Message'  
                    multiline
                    rows={4}    
                />
                <Button 
                sx={{
                    background:'#EF4040', 
                    color:'white',
                    '&:hover':{
                        background:'#EF4040', 
                        color:'white',
                    }
                }}>
                    Sumbit
                </Button>
                </form>
            </div>
        </div>
       
    </div>
</div>
  )
}

export default ContactPage