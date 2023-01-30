import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, PATCH_USER_FAILURE, PATCH_USER_REQUEST, PATCH_USER_SUCCESS } from "./actionTypes"

export const getAllUser=()=>dispatch=>
{
   dispatch({type:GET_USER_REQUEST})
   return axios.get("https://purplebackend.onrender.com/users/all",{headers:{"token":localStorage.getItem("token")}})
   .then((r)=>dispatch({type:GET_USER_SUCCESS,payload:r.data}))
   .catch(e=>console.log(e))
}

export const patchUserData=(data)=>dispatch=>
{
 
    dispatch({type:PATCH_USER_REQUEST})
    return axios.patch(`https://purplebackend.onrender.com/users/update/${data._id}`,data,{headers:{"token":localStorage.getItem("token")}})
    .then((r)=>dispatch({type:PATCH_USER_SUCCESS,payload:data,msg:r.data}))
    .catch((e)=>console.log(e,"e"))
}