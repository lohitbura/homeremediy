import { useEffect, useState } from "react";
import { blogDetailsInterface, blogListResponseInterface } from "../../utils/interfaces/blogs/blog_interface";
import { fetchBlogList } from "../../apis/blog_apis";
import { appConstants } from "../../utils/app_constants/app_string_constants";
import BlogCard from "./BlogCard";


const BlogList = () => {

    const [data,setData] = useState<blogDetailsInterface[]|null>(null);
    const [isLoading,setLoading] = useState(false);
    const [cursor,setCursor] = useState('');
        
    const fetchBlog = async()=>{
        setLoading(true);
      const result: blogListResponseInterface =  await fetchBlogList({limit:'3',cursor:cursor})
      if(result.response==appConstants.success){

       const  newData:blogDetailsInterface[] = (data??[]).concat(result.payload??[]);
         console.log(newData);
         setData(newData);
      }
      setLoading(false);
     }

     const handleScroll = () => {

      // if (window.innerHeight + document.documentElement.scrollTop +20 < document.documentElement.offsetHeight || isLoading) {
      //   console.log(window.innerHeight)
      //   console.log(document.documentElement.scrollTop)
      //   console.log(document.documentElement.offsetHeight)
      //   console.log('JEre');
      //   return;
      // }
      // console.log('JEre is ');
      // console.log(data);
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 100 && !isLoading) {
        console.log("hreer")
        if(!isLoading){
        if(data && Array.isArray(data) && data.length >0){
          console.log(data[0].id??'');
        setCursor(data[0].id??'');
        fetchBlog();
        }
        }
      }
    };
 

    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[data])

     useEffect(()=>{
      console.log("hree is te")
         fetchBlog();
     },[]);


     if(isLoading && data===null){
        return <div>Loading...</div>
     }

  return (
    <>
    <div className='blogListParent'>
        {data?.map((blogData,index:number)=><BlogCard key={index} {...blogData}/>)}
    </div>
    {/* {
        isLoading?<div>Loading...</div>:<></>
    } */}
    </>
  )
}

export default BlogList
