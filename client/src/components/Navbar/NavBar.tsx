import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import logo              from '../../assets/images/logo.png'
import { Link }          from 'react-router-dom';
import './style.css';
import { 
        ToggleButton,Button, 
        Toolbar,Box, AppBar } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className='z-10'>
    <AppBar position="static" 
    sx={{
        background:'#B7C1F5',
        padding:'20px 20px',
        position: 'absolute',
        zIndex:'10'
    }}>
      <Toolbar className='flex justify-between items-center'>
        <div>
            <Link to='/'>
              <div className="flex items-center">
                <img src={logo} alt="" width='90px' />
                <h1 className="logo font-bold text-4xl">BMIS</h1>
              </div>
            </Link>
            <h1 className='block md:hidden text-xl text-text font-black logo'>
              BMIS
            </h1>
        </div>
        
        <div className='hidden md:flex'>
            <Link to='/'>
              <ToggleButton  value="left">
               <h1 className="text-lg font-semibold text-l-text">Back to Home</h1>
               </ToggleButton>
            </Link>
        </div>
        <div className='flex  md:hidden'>
            <Button className='flex flex-col'>
                <LoginOutlinedIcon  className='text-text text-base'/> 
                <span className='text-xs text-text'>lOGIN</span>
            </Button>
        </div>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default NavBar