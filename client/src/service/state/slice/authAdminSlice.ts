import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminInfo: localStorage.getItem('AdminInfo') 
            ? JSON.parse(localStorage.getItem('AdminInfo')!) 
            : null,
};

const authAdminSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    setCredentials:(state,action) => {
        state.adminInfo = action.payload;
        localStorage.setItem('AdminInfo', JSON.stringify(action.payload))
    },
    logOutAdmin: (state) => {
        state.adminInfo = null;
        localStorage.removeItem('AdminInfo');
      }
  },
});

export const {setCredentials,logOutAdmin} = authAdminSlice.actions;

export default authAdminSlice.reducer