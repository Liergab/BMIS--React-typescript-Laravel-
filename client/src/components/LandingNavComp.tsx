import React              from 'react'
import ToggleButton       from '@mui/material/ToggleButton';
import ToggleButtonGroup  from '@mui/material/ToggleButtonGroup';
import logo               from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


const LandingNavComp:React.FC = () => {
  return (
    <>
          <div className="flex items-center">
            <img src={logo} alt="" width='90px' />
             <h1 className="logo font-bold text-4xl">BMIS</h1>
          </div>
          <ToggleButtonGroup>
          <div className="flex space-x-10">

            <ToggleButton 
              value="left" 
              style={{ border: 'none', outline: 'none' }}
            >
             <Link to='/'>
                <h1 className="text-lg font-semibold text-l-text" >Home</h1>
             </Link>

            </ToggleButton>

            <ToggleButton 
              value="left"
              style={{ border: 'none', outline: 'none' }} 
            >
              <Link to='/about'>
                <h1 className="text-lg font-semibold text-l-text" >About</h1>
              </Link>
              
            </ToggleButton>

            <ToggleButton 
              value="left" 
              style={{ border: 'none', outline: 'none' }}
            >
              <Link to='/contact'>
               <h1 className="text-lg font-semibold text-l-text" >Contact</h1>
              </Link>
            

            </ToggleButton>

          </div>
          </ToggleButtonGroup>
    
    </>
  )
}

export default LandingNavComp