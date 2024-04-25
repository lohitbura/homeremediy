import { useParams } from "react-router-dom";
import { useBlogDetails } from "../hooks/useBlogDetails";
import { appConstants } from "../utils/app_constants/app_string_constants";



const BlogDetailsScreen  = ()=>{

    const {postId} = useParams();
    const {data,isLoading} = useBlogDetails(postId??'');

    if(isLoading){
        return <div>Loading...</div>
    }

    if(data && data.response==appConstants.success && data.payload){
    return (
        <div className="blogDetails">
            <h3>{data.payload.title}</h3>
        
            <div dangerouslySetInnerHTML={{ __html: data.payload.content }} />

    
        
        </div>

    )
}
return <div></div>
}

export default BlogDetailsScreen;