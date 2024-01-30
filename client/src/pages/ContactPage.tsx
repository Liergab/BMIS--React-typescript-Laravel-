// import React from 'react'
import './style.css'
import LandingNavComp from '../components/LandingNavComp';
import contact        from '../assets/images/contact-img.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { 
        Button, 
        TextField }   from '@mui/material';

const ContactPage = () => {
  return (
    <div className="flex flex-col  h-full w-full py-[50px]">
    <div className="flex justify-between items-center px-[20px] md:px-[200px]">
      <LandingNavComp />
    </div>
    <div className=" flex flex-col md:flex md:flex-row h-full items-center justify-start px-[20px] md:px-28 mt-20 md:mt-0 gap-8 md:gap-0">
        <div className='flex-1 hidden md:flex items-center justify-center'>
            <img src={contact}  alt="" className='w-[700px]' />
        </div>
        <div className='flex-1 flex flex-col items-center  justify-start gap-4 py-2'>
            <h1 className="text-text text-2xl font-bold logo">CONTACT US</h1>
            <div className='p-6 md:p-14 border-2 bg-text border-text rounded-lg'>
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
        <div className='md:hidden flex-1 flex flex-col gap-2'>
            <div>
                <FacebookIcon sx={{color:'blue','&:hover':{color:'#EF4040'}}}/>
                 <span className='text-xs text-l-text cursor-pointer hover:underline'>Sample@facebook.com</span>
            </div>
            <div>
                <CallIcon sx={{color:'blue','&:hover':{color:'#EF4040'}}}/> 
                <span className='text-xs text-l-text cursor-pointer hover:underline'>09096070055</span>
            </div>
            <div>
                <LocationOnIcon sx={{color:'blue','&:hover':{color:'#EF4040'}}}/>
                <span className='text-xs text-l-text cursor-pointer hover:underline'>Brgy.Malvar Unisan Quezon</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContactPage