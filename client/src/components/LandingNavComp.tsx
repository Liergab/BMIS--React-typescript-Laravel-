import React              from 'react'
import ToggleButton       from '@mui/material/ToggleButton';
import ToggleButtonGroup  from '@mui/material/ToggleButtonGroup';
import logo               from '../assets/images/logo.png'
import { Link }           from 'react-router-dom';
import MenuIcon           from '@mui/icons-material/Menu';
import CloseIcon          from '@mui/icons-material/Close';
import { Button, 
        Menu, MenuItem } from '@mui/material';


const LandingNavComp:React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <>   
      <div className='flex items-center justify-between w-full '>
        <Link to='/'>
          <div className="flex items-center cursor-pointer">
            <img src={logo} alt=""  className=' w-[40px] md:w-[90px]'/>
            <h1 className="logo font-bold text-2xl md:text-4xl">BMIS</h1>
          </div>
        </Link>
        <div className='block lg:hidden'>
         <Button
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
         >
           {anchorEl ? <CloseIcon/>  : <MenuIcon/>}
         </Button>

         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="/">
              <MenuItem 
                onClick={handleClose} 
                sx={{
                  color:"#333333",
                  fontSize:"12px",
                  fontWeight:"700"
                }}
              > 
                HOME
              </MenuItem>
            </Link>
            <Link to='/about'>
              <MenuItem 
                onClick={handleClose}
                sx={{
                  color:"#333333",
                  fontSize:"12px",
                  fontWeight:"700"
                }}
              >
                ABOUT
              </MenuItem>
            </Link>
            <Link to='/contact'>
              <MenuItem 
               onClick={handleClose}
               sx={{
                color:"#333333",
                fontSize:"12px",
                fontWeight:"700"
              }}
              >
                CONTACT
              </MenuItem>
            </Link>
        </Menu>
        </div>
      </div>
      <ToggleButtonGroup>
        <div className="md:flex justify-between gap-4 hidden ">

            <ToggleButton 
              value="left" 
              style={{ border: 'none', outline: 'none' }}
            >
              <Link to='/'>
                  <h1 className="text-xs md:text-lg font-semibold text-l-text" >Home</h1>
              </Link>
            </ToggleButton>

            <ToggleButton 
              value="left"
              style={{ border: 'none', outline: 'none' }} 
            >
              <Link to='/about'>
                <h1 className="text-xs md:text-lg font-semibold text-l-text" >About</h1>
              </Link>
            </ToggleButton>

            <ToggleButton 
              value="left" 
              style={{ border: 'none', outline: 'none' }}
            >
              <Link to='/contact'>
               <h1 className="text-xs md:text-lg font-semibold text-l-text" >Contact</h1>
              </Link>
            </ToggleButton>

        </div>
        
          </ToggleButtonGroup>
    </>
  )
}

export default LandingNavComp