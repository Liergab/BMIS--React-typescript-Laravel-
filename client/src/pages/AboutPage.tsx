
import LandingNavComp from '../components/LandingNavComp';
import about          from '../assets/images/about-img.png';
import { Button }     from '@mui/material';

const AboutPage = () => {
  return (
     <div className="flex flex-col  h-full w-full py-[50px]">
        <div className="flex justify-between items-center px-[20px] md:px-[200px]">
          <LandingNavComp />
        </div>
        <div className="flex flex-col md:flex md:flex-row h-full items-center justify-center px-[20px] md:px-28 mt-20 md:mt-0">
            <div className='flex-1 flex flex-col items-center justify-center gap-8'>
                <h1 className="text-text text-2xl md:text-6xl font-bold">ABOUT US</h1>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className="max-w-md text-xs md:text-base text-justify text-l-text ">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                    <h2 className="max-w-md text-xs md:text-base  text-justify text-l-text ">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                    <Button 
                        type='button' 
                        sx={{
                            background:'#EF4040', 
                            color:'white',
                            fontSize:'14px',
                            '&:hover':{
                                background:'#EF4040', 
                                color:'white',
                            }, '@media (max-width: 600px)':{
                                fontSize: '10px',
                            },
                         }}
                    >
                      Terms and Condition
                    </Button>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <img src={about}  alt="" className=' w-[700px]' />
            </div>
        </div>
    </div>
  
  )
}

export default AboutPage