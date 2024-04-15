/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiConstants } from "../app_constants/api_constants";
import { appConstants, appGlobalConstants } from "../app_constants/app_string_constants";
import { apiResponseInterface } from "../interfaces/api_response_interface";


const apiHeader = {
    "Content-Type": "application/json",
    "Authorization":`Bearer ${appGlobalConstants.token}`
}


const getQueryString = (query?:Map<any,any>)=>{

    if(query!=null){
    let queryString = "?";

    query.forEach((value,key)=>{
        queryString = queryString+key+"="+value+"&"
    })
    return queryString.substring(0, queryString.length - 1);
}else{
    return "";
}
}

const responseHandler = async (data:Response):Promise<apiResponseInterface>=>{
    if(data.ok){
        return await data.json();
    }
    else{
        return {
            response:appConstants.failure,
            error:data.statusText
        }
    }
}

const apiService = {
    get: async(path:string,query?:Map<any,any>):Promise<apiResponseInterface>=>{
        try{
        const queryString  = getQueryString(query);
        
        const apiPath = path+queryString;
            const data = await fetch(apiConstants.baseURL+apiPath,{
                method:"GET",
    
                headers:apiHeader
            })

          return await responseHandler(data);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch(e:any){
            return {
                response:appConstants.failure,
                error:e.toString()
            }
        }
    },
    post: async(path:string,bodyData?:any,query?:Map<any,any>):Promise<apiResponseInterface>=>{
        try{
        const queryString  = getQueryString(query);
        console.log(bodyData);
        const apiPath = path+queryString;
            const data = await fetch(apiConstants.baseURL+apiPath,{
                method:"POST",
        
                headers:apiHeader,
                body:JSON.stringify(bodyData)
            })
            console.log(data)
          return await responseHandler(data);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch(e:any){
            console.log(e);
            return {
                response:appConstants.failure,
                error:e.toString()
            }
        }
    }
}

export default apiService;