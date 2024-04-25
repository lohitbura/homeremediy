import { useNavigate } from "react-router-dom";
import { appImages } from "../../utils/app_constants/app_images";
import { blogDetailsInterface } from "../../utils/interfaces/blogs/blog_interface";
import { routerConstants } from "../../utils/app_constants/router_constants";


const BlogCard = (blogData:blogDetailsInterface)=>{

    const navigate = useNavigate();

    return <div className="blogCard" onClick={()=>{
        navigate(routerConstants.blogDetailsPage+`${blogData.id}`);
    }}>
        <img src={appImages.loginImage}></img>
        <h3>{blogData.title}</h3>
        <p>{blogData.author.username}</p>
    </div>
}

export default BlogCard;