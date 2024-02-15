import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../service/state/store'
import { Navigate, Outlet } from 'react-router-dom'

const ResidentLayout:React.FC = () => {
    const {residentInfo} = useSelector((state:RootState) => state.resident)
    console.log(residentInfo)
    return (
      <div>
          {residentInfo?.access_token
           && residentInfo?.resident?.role == "resident" 
           && residentInfo?.resident?.status == "approved"
           ? <Outlet /> : <Navigate to='/login'/>}
      </div>
    )
}

export default ResidentLayout