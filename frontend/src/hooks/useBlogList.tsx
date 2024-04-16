import { useEffect, useState } from "react"
import { fetchBlogList } from "../apis/blog_apis";
import {blogDetailsInterface, blogListResponseInterface } from "../utils/interfaces/blogs/blog_interface";
import { appConstants } from "../utils/app_constants/app_string_constants";


export const useBlogList = ()=>{

    const [data,setData] = useState<blogDetailsInterface[]|null>(null);
        
   const fetchBlog = async()=>{
     const result: blogListResponseInterface =  await fetchBlogList({limit:'10',cursor:''})
     if(result.response==appConstants.success){
        const newData:blogDetailsInterface[] = [];
        newData.concat(data??[],result.payload??[]);
        setData(newData);
     }
    }

    useEffect(()=>{
        fetchBlog();
    },[]);

    return data;

}