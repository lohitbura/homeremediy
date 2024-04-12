import { Context } from "hono";
import { z } from "zod";
import {PrismaClient} from "@prisma/client/edge"
import { errorResponseHandler, successResponseHandler } from "../helpers/response_handler";

import { withAccelerate } from "@prisma/extension-accelerate";

const Post = z.object({
    title:z.string(),
    content:z.string()
})

export const createBlog = async(c:Context)=>{

    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
       const request =  await c.req.json();
       const userId = c.req.addValidatedData.id;
        const zodResult = Post.safeParse(request);
        if(zodResult.success){
       const post = await prisma.post.create({
        data:{
            title:request.title,
            content:request.content,
            authorId:userId,
            published:true
        }
       });

       if(post){
        return c.json(successResponseHandler('Blog created'));
       }
       else{
        return c.json(errorResponseHandler('Something went wrong'));
       }
    }
    else{
        return c.json(errorResponseHandler(zodResult.error));
    }

    }
    catch(e){
        return c.json(errorResponseHandler(e));
    }

}

export const  getAllBlogs = async(c:Context)=>{
    try{
        const limit:number = parseInt(c.req.query('limit')??'10');
        const cursor = c.req.query('cursor');
        const skip = parseInt(c.req.query('skip')??'0')

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        if(cursor){

        const data = await prisma.post.findMany({
            skip:1,
            take:limit,
            cursor:{
                id:cursor
            },
            orderBy:{
                createDate:'desc'
            },
            select:{
                title:true,
                content:true,
                id:true,
                author:{
                    select:{
                        username:true,
                        id:true
                    }
                }
            },
            where:{
                published:true
            }
        })

        if(data){
            return c.json(successResponseHandler(data));
        }
        else{
            return c.json(errorResponseHandler('Error'));
        }
    }
    else{
        const data = await prisma.post.findMany({
            skip:skip,
            take:limit,
            orderBy:{
                createDate:'desc'
            },
            select:{
                title:true,
                content:true,
                id:true,
                author:{
                    select:{
                        username:true,
                        id:true
                    }
                }
            },
            where:{
                published:true
            }
        })

        if(data){
            return c.json(successResponseHandler(data));
        }
        else{
            return c.json(errorResponseHandler('Error'));
        }
    }
    }
    catch(e){
        return c.json(errorResponseHandler(e));
    }
}


export const getBlogDetails = async(c:Context)=>{
    try{
       const postId = c.req.param('postId')??'';
       const prisma  = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
       }).$extends(withAccelerate());

       const post = await prisma.post.findFirst({
        where:{
            id:postId
        },
        select:{
            title:true,
            content:true,
            id:true,
            author:{
                select:{
                    username:true,
                    name:true,
                    id:true
                }
            }
        }
       })

       if(post){
            return c.json(successResponseHandler(post));
       }
       else{
        return c.json(errorResponseHandler('Error'));
       }
    }
    catch(e){
       return c.json(errorResponseHandler(e));
    }
}