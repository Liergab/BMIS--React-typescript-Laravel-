import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  residentInfo: localStorage.getItem('ResidentInfo') 
            ? JSON.parse(localStorage.getItem('ResidentInfo')!) 
            : null,
};

const authResidentSlice = createSlice({
  name: 'residentAuth',
  initialState,
  reducers: {
    setResidentCredentials:(state,action) => {
        state.residentInfo = action.payload;
        localStorage.setItem('ResidentInfo', JSON.stringify(action.payload))
    },
    logOutResident: (state) => {
        state.residentInfo = null;
        localStorage.removeItem('ResidentInfo');
      }
  },
});

export const {setResidentCredentials,logOutResident} = authResidentSlice.actions;

export default authResidentSlice.reducer