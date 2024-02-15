import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../service/state/store';

const AdminLayout:React.FC = () => {

const {adminInfo} = useSelector((state:RootState) => state.admin)
  return (
    <div>
        {adminInfo?.token && adminInfo?.user?.role === "admin" ? <Outlet /> : <Navigate to='/login'/>}
    </div>
  )
}

export default AdminLayout