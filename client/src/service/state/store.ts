import { configureStore } from "@reduxjs/toolkit";
import authAdminSliceReducer from "./slice/authAdminSlice";
import authResidentSlice from "./slice/authResidentSlice";
export const store = configureStore({
    reducer:{
       admin:authAdminSliceReducer,
       resident: authResidentSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch