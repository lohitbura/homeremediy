import { Context } from "hono";
import { verify } from 'hono/jwt'
import { errorResponseHandler } from "../helpers/response_handler";

export const authMiddleware = async(c:Context,next:any)=>{
    const token =  c.req.header().authorization.split(' ')[1];
    
    try{
    const payload = await verify(token,c.env.JWT_SECRET);

    c.req.addValidatedData = payload;
    
      return await  next();
    }
    catch(e){
        return c.json(errorResponseHandler(e));
    }
}