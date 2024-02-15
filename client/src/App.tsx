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
import AdminLayout       from './layout/AdminLayout';
import ResidentLayout    from './layout/ResidentLayout';
import { Toaster }       from 'react-hot-toast';


const App:React.FC = () => {
  return (
    <Box className='w-full h-screen'>
      <Toaster position='bottom-right'  toastOptions={{duration:5000}} />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
          <Route element={<AuthLayout/>}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/Register' element={<Register />} />
          </Route>
          <Route element={<AdminLayout/>}>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          </Route>
          <Route element={<ResidentLayout/>}>
            <Route path='/resident/dashboard' element={<ResidentDashboard/>}/>
          </Route>
      </Routes>
    </Box>
  )
}

export default App