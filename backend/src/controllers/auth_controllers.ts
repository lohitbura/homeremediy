
import { z } from "zod";
import {PrismaClient} from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { errorResponseHandler, successResponseHandler } from "../helpers/response_handler";
import {sign } from 'hono/jwt';

const User = z.object({
    username :z.string(),
    password: z.string()
});

type User = z.infer<typeof User>;

export const signUpUser = async(c:Context)=>{
        const request = await c.req.json();

        const zodResult = User.safeParse(request);
    
        if(zodResult.success){
            const prisma = new PrismaClient({
                datasourceUrl: c.env.DATABASE_URL,
            }).$extends(withAccelerate());
            try{

                

        const result =   await prisma.user.create({
                data:{
                    username:request.username,
                    password:request.password
                },
                select:{
                    id: true
                }
            });
            if(result){
           return c.json(successResponseHandler('Success'));
            }
            else{
              return  c.json(errorResponseHandler('Error'))
            }
        }
        catch(e){
            console.log((e)+'hrer');
           return c.json(errorResponseHandler(e))
        }
        }  
        else{
          return  c.json(errorResponseHandler(zodResult.error))
        } 
}

export const  signinUser = async( c:Context)=>{


    try{
        const request = await c.req.json();
        const zodResult =  User.safeParse(request);
    if(zodResult.success){
        
        const prisma = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const user = await prisma.user.findUnique({
            where:{
                username:request.username,
                password:request.password
            }
        });

        if(user){
                const payload = {
                    id:user.id,
                    role:'user',
                    exp:Math.floor(Date.now() / 1000) + 60 * 200
                }

                const secret = c.env.JWT_SECRET

                const token = await sign(payload,secret);
                console.log(token);
                return c.json(successResponseHandler(token));
        }
        else{
            return c.json(errorResponseHandler('Wrong Credentials'));
        }


    }
    
    else{
      return  c.json(errorResponseHandler(zodResult.error));
    }
}
    catch(e){
        console.log(e);
        return  c.json(errorResponseHandler(e));
      }
}