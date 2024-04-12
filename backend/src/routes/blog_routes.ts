
import { Hono } from "hono";
import { createBlog, getAllBlogs, getBlogDetails } from "../controllers/blog_controllers";
import { authMiddleware } from "../middlewares/auth_middleware";

const blogRoute = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string
	}
}>();

blogRoute.get('/blogDetails/:postId',(c)=>{
    return getBlogDetails(c);
})

blogRoute.post('/createBlog',authMiddleware,(c)=>{
    return createBlog(c);
})

blogRoute.put('/updateBlog/:id',(c)=>{
    return c.text('put blog');
})

blogRoute.get('/getAllBlog',(c)=>{
    return getAllBlogs(c);
})

export default blogRoute;