
export interface blogListResponseInterface {
    response:string,
    payload?:blogDetailsInterface[],
    error?:string
}

export interface blogDetailsInterface{
    id:string,
    title:string,
    content:string,
}