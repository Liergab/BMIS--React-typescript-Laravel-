import React             from 'react';
import {Route, Routes}   from 'react-router-dom';
import { Box}            from '@mui/material';
import './App.css'
import AuthLayout        from './layout/AuthLayout';
import AdminDashboard    from './pages/Admin/AdminDashboard';
import ResidentDashboard from './pages/Resident/ResidentDashboard';
import {AboutPage,
       ContactPage,
       LandingPage,
       LoginPage, 
       Register   }      from './pages';



const App:React.FC = () => {
  return (
    <Box className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
          <Route element={<AuthLayout/>}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/Register' element={<Register />} />
          </Route>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route path='/resident/dashboard' element={<ResidentDashboard/>}/>
      </Routes>
      
      
    </Box>
  )
}

export default App