import { BaseUrl } from "./BaseUrl"
import commonApi from "./commonApi"


export const addResume = async (reqBody)=>{
    return await commonApi('post',`${BaseUrl}/resume`,reqBody)
}


export const getResume = async()=>{
    return await commonApi('get',`${BaseUrl}/resume`,"")
}

export const deleteResume = async (id)=>{
return await commonApi('delete',`${BaseUrl}/resume/${id}`,{})
}


export const editResume = async (id,reqBody)=>{
    return await commonApi('put',`${BaseUrl}/resume/${id}`,reqBody)
}