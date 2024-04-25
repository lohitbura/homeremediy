import { apiConstants } from "../utils/app_constants/api_constants";
import { appConstants } from "../utils/app_constants/app_string_constants";
import {  blogDetailsResponseInterface, blogListResponseInterface, createBlogResponseInterface } from "../utils/interfaces/blogs/blog_interface";
import apiService from "../utils/services/api_service";
import {CreateBlogInput} from '@lohitbura/homeremediy-common/dist/blogs/blog_zod';


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

export const fetchBlogDetails = async(id:string):Promise<blogDetailsResponseInterface>=>{
    try{
    const res:blogDetailsResponseInterface = await apiService.get(apiConstants.blogDetails+id);
    console.log(res);
    return res;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(e:any){
        return {
            response:appConstants.failure,
            error:e.toString()
        }
    }
}

export const createBlogPost = async(blogDetails:CreateBlogInput):Promise<createBlogResponseInterface>=>{
    try{
        const res:createBlogResponseInterface = await apiService.post(apiConstants.createBlog,blogDetails);
        return res;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(e:any){
        return {
            response:appConstants.failure,
            error:e.toString()
        }
    }
}