import { createSlice } from "@reduxjs/toolkit";



const langSlice = createSlice({
    name:'langSlice',
    initialState:{
        langKey:'en'
    },
    reducers:{
        updateLang:(state,action)=>{
            state.langKey = action.payload;
        }
    }
})

export const {updateLang} = langSlice.actions;

export default langSlice.reducer;