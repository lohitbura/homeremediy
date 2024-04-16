import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth_slice";
import langReducer from './lang_slice';

const appStore = configureStore(
    {
        reducer:{
            auth:authReducer,
            lang:langReducer
        }
    }
)

export default appStore;

export type IRootState = ReturnType<typeof appStore.getState>