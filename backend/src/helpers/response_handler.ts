import { appConstants } from "./app_constants"


export const successResponseHandler = (data:any)=>{
    return {
        response: appConstants.success,
        payload:data
    }
}

export const errorResponseHandler = (error:any)=>{
    return {
        response: appConstants.error,
        error:error
    }
}