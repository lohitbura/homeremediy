import { apiConstants } from "../utils/app_constants/api_constants";
import { appConstants } from "../utils/app_constants/app_string_constants";
import { blogListResponseInterface } from "../utils/interfaces/blogs/blog_interface";
import apiService from "../utils/services/api_service";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchBlogList = async({queryData}:any):Promise<blogListResponseInterface>=>{

    try{
       const  data:blogListResponseInterface = await  apiService.get(apiConstants.blogList,queryData);
       return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(e:any){
       return {
            response:appConstants.failure,
            error:e.toString()
        }
    }   
}