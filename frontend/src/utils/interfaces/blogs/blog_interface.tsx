
export interface blogListResponseInterface {
    response:string,
    payload?:blogDetailsInterface[],
    error?:string
}

export interface blogDetailsResponseInterface{
    response:string,
    payload?:blogDetailsInterface,
    error?:string
}

export interface blogDetailsInterface{
    id:string,
    title:string,
    content:string,
    author: authorDetailsInterface
}

export interface authorDetailsInterface{
    username:string
}

export interface createBlogResponseInterface{
    response:string,
    payload?:string,
    error?:string
}