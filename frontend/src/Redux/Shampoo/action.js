
import axios from "axios"
import { DELETE_SHAMPOO_FAILURE, DELETE_SHAMPOO_REQUEST, DELETE_SHAMPOO_SUCCESS, GET_SHAMPOO_FAILURE, GET_SHAMPOO_REQUEST, GET_SHAMPOO_SUCCESS, PATCH_SHAMPOO_FAILURE, PATCH_SHAMPOO_REQUEST, PATCH_SHAMPOO_SUCCESS, POST_SHAMPOO_FAILURE, POST_SHAMPOO_REQUEST, POST_SHAMPOO_SUCCESS } from "./actionTypes"


export const getShampooData=()=>dispatch=>
{   


    dispatch({type:GET_SHAMPOO_REQUEST})
    return axios.get("https://purplebackend.onrender.com/products/shampoo").then((r)=>{dispatch({type:GET_SHAMPOO_SUCCESS,payload:r.data})})
    .catch(e=>{dispatch({type:GET_SHAMPOO_FAILURE})})
    
}

export const postShampooData=(data)=>dispatch=>
{   


    dispatch({type:POST_SHAMPOO_REQUEST})
    return axios.post("https://purplebackend.onrender.com/products/addProduct",data).then(r=>dispatch({type:POST_SHAMPOO_SUCCESS,payload:data}))
    .catch(e=>{dispatch({type:POST_SHAMPOO_FAILURE})})
    
}


export const patchShampooData=(data)=>dispatch=>
{
    dispatch({type:PATCH_SHAMPOO_REQUEST})
    return axios.patch(`https://purplebackend.onrender.com/products/edit/${data.id}`,data).then(r=>dispatch({type:PATCH_SHAMPOO_SUCCESS,payload:data}))
    .catch(e=>{dispatch({type:PATCH_SHAMPOO_FAILURE})})
}

export const deleteShampooData=(id)=>dispatch=>
{

    dispatch({type:DELETE_SHAMPOO_REQUEST})
    return axios.delete(`https://purplebackend.onrender.com/products/deleteProduct/${id}`).then(r=>dispatch({type:DELETE_SHAMPOO_SUCCESS,payload:id}))
    .catch(e=>{dispatch({type:DELETE_SHAMPOO_FAILURE})})
}

