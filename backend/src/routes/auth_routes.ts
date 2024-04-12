import { Hono } from "hono";
import { signUpUser, signinUser } from "../controllers/auth_controllers";

const authRoute = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string
	}
}>();

authRoute.post('/signup',async(c)=>{

  return await signUpUser(c);
})

authRoute.post('/signin',async(c)=>{
   return await signinUser(c);
})

export default authRoute;