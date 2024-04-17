import { useEffect, useState } from "react"
import { fetchBlogDetails } from "../apis/blog_apis";
import { blogDetailsResponseInterface } from "../utils/interfaces/blogs/blog_interface";


export const useBlogDetails = (id:string)=>{

    const [data,setData] = useState<blogDetailsResponseInterface|null>(null);
    const [isLoading,setLoading] = useState(true);

    const fetchData = async()=>{
        setLoading(true);
     const   result = await fetchBlogDetails(id);
     setData(result);
     setLoading(false)
    }

    useEffect(()=>{
    fetchData();
    },[])

    return {data,isLoading};
}