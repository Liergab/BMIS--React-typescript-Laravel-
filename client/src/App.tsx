import React             from 'react';
import {Route, Routes}   from 'react-router-dom';
import { Box}            from '@mui/material';
import './App.css'
import AuthLayout        from './layout/AuthLayout';
import {
  LandingPage,
   LoginPage, Register } from './pages';
import AdminDashboard from './pages/Admin/AdminDashboard';

const App:React.FC = () => {
  return (
    <Box className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
          <Route element={<AuthLayout/>}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/Register' element={<Register />} />
          </Route>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      </Routes>
      
      
    </Box>
  )
}

export default App