import { useEffect, useState } from "react";
import { blogDetailsInterface, blogListResponseInterface } from "../../utils/interfaces/blogs/blog_interface";
import { fetchBlogList } from "../../apis/blog_apis";
import { appConstants } from "../../utils/app_constants/app_string_constants";


const BlogList = () => {

    const [data,setData] = useState<blogDetailsInterface[]|null>(null);
    const [isLoading,setLoading] = useState(false);
    const [cursor,setCursor] = useState('');
        
    const fetchBlog = async()=>{
        setLoading(true);
      const result: blogListResponseInterface =  await fetchBlogList({limit:'10',cursor:''})
      if(result.response==appConstants.success){

         const newData:blogDetailsInterface[] = [];
         newData.concat(...data??[],...result.payload??[]);
         console.log(newData);
         setData(newData);
      }
      setLoading(false);
     }
 
     useEffect(()=>{
         fetchBlog();
     },[cursor]);


     if(isLoading && data===null){
        return <div>Loading...</div>
     }

  return (
    <>
    <div className='blogListParent'>
        {data?.map((blogData)=><div>{blogData.title}</div>)}
    </div>
    {
        isLoading?<div>Loading...</div>:<></>
    }
    </>
  )
}

export default BlogList
