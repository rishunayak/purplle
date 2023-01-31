
import axios from "axios"
import { DELETE_FACE_WASH_FAILURE, DELETE_FACE_WASH_REQUEST, DELETE_FACE_WASH_SUCCESS, GET_FACE_WASH_FAILURE, GET_FACE_WASH_REQUEST, GET_FACE_WASH_SUCCESS, PATCH_FACE_WASH_FAILURE, PATCH_FACE_WASH_REQUEST, PATCH_FACE_WASH_SUCCESS, POST_FACE_WASH_FAILURE, POST_FACE_WASH_REQUEST, POST_FACE_WASH_SUCCESS } from "./actionTypes"


export const getFaceWashData=()=>dispatch=>
{   


    dispatch({type:GET_FACE_WASH_REQUEST})
    return axios.get("https://purplebackend.onrender.com/products/faceWash").then((r)=>{dispatch({type:GET_FACE_WASH_SUCCESS,payload:r.data})})
    .catch(e=>{dispatch({type:GET_FACE_WASH_FAILURE})})
    
}

export const postFaceWashData=(data)=>dispatch=>
{   


    dispatch({type:POST_FACE_WASH_REQUEST})
    return axios.post("https://purplebackend.onrender.com/products/addProduct",data).then(r=>dispatch({type:POST_FACE_WASH_SUCCESS,payload:data,msg:r.data}))
    .catch(e=>{dispatch({type:POST_FACE_WASH_FAILURE})})
    
}


export const patchFaceWashData=(data)=>dispatch=>
{
    dispatch({type:PATCH_FACE_WASH_REQUEST})
    return axios.patch(`https://purplebackend.onrender.com/products/edit/${data.id}`,data).then(r=>dispatch({type:PATCH_FACE_WASH_SUCCESS,payload:data,msg:r.data}))
    .catch(e=>{dispatch({type:PATCH_FACE_WASH_FAILURE})})
}

export const deleteFaceWashData=(id)=>dispatch=>
{

    dispatch({type:DELETE_FACE_WASH_REQUEST})
    return axios.delete(`https://purplebackend.onrender.com/products/deleteProduct/${id}`).then(r=>dispatch({type:DELETE_FACE_WASH_SUCCESS,payload:id,msg:r.data}))
    .catch(e=>{dispatch({type:DELETE_FACE_WASH_FAILURE})})
}

