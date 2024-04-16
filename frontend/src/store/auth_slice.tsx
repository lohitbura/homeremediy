import { createSlice } from "@reduxjs/toolkit";
import {  appGlobalConstants } from "../utils/app_constants/app_string_constants";


const authSlice = createSlice(
    {
        name:'authSlice',
        initialState:{
            isLoggedIn:false,
            loading:false
        },
        reducers:(create)=>({
            loginUserSlice:create.reducer<string>((state,action)=>{
                state.isLoggedIn = true;
                appGlobalConstants.token = (action.payload);
            }
            )
        }
        )
    }
)

export const {loginUserSlice} = authSlice.actions;

export default authSlice.reducer;