
import axios from "axios"
import { DELETE_PRIMER_FAILURE, DELETE_PRIMER_REQUEST, DELETE_PRIMER_SUCCESS, GET_PRIMER_FAILURE, GET_PRIMER_REQUEST, GET_PRIMER_SUCCESS, PATCH_PRIMER_FAILURE, PATCH_PRIMER_REQUEST, PATCH_PRIMER_SUCCESS, POST_PRIMER_FAILURE, POST_PRIMER_REQUEST, POST_PRIMER_SUCCESS } from "./actionTypes"


export const getPrimerData=()=>dispatch=>
{   


    dispatch({type:GET_PRIMER_REQUEST})
    return axios.get("https://purplebackend.onrender.com/products/primer").then((r)=>{dispatch({type:GET_PRIMER_SUCCESS,payload:r.data})})
    .catch(e=>{dispatch({type:GET_PRIMER_FAILURE})})
    
}

export const postPrimerData=(data)=>dispatch=>
{   


    dispatch({type:POST_PRIMER_REQUEST})
    return axios.post("https://purplebackend.onrender.com/products/addProduct",data).then(r=>dispatch({type:POST_PRIMER_SUCCESS,payload:data}))
    .catch(e=>{dispatch({type:POST_PRIMER_FAILURE})})
    
}


export const patchPrimerData=(data)=>dispatch=>
{
    dispatch({type:PATCH_PRIMER_REQUEST})
    return axios.patch(`https://purplebackend.onrender.com/products/edit/${data.id}`,data).then(r=>dispatch({type:PATCH_PRIMER_SUCCESS,payload:data}))
    .catch(e=>{dispatch({type:PATCH_PRIMER_FAILURE})})
}

export const deletePrimerData=(id)=>dispatch=>
{

    dispatch({type:DELETE_PRIMER_REQUEST})
    return axios.delete(`https://purplebackend.onrender.com/products/deleteProduct/${id}`).then(r=>dispatch({type:DELETE_PRIMER_SUCCESS,payload:id}))
    .catch(e=>{dispatch({type:DELETE_PRIMER_FAILURE})})
}

