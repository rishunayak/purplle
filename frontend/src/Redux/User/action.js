
import axios from "axios"
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes"

export const userRegister=(register)=>dispatch=>
{   


    dispatch({type:REGISTER_USER_REQUEST})
    return axios.post("https://purplebackend.onrender.com/users/register",register).then(r=>dispatch({type:REGISTER_USER_SUCCESS,payload:r.data}))
    .catch(e=>{dispatch({type:REGISTER_USER_FAILURE})})
    
}

export const userLogin=(payload)=>dispatch=>
{
    dispatch({type:LOGIN_USER_REQUEST})
    return axios.post("https://purplebackend.onrender.com/users/login",payload).then(r=>dispatch({type:LOGIN_USER_SUCCESS,payload:r.data}))
    .catch(e=>{dispatch({type:LOGIN_USER_FAILURE})})
}

