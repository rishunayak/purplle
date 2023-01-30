import axios from "axios"
import { GET_ALL_ORDER_FAILURE, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./actionTypes"



export const getUserOrder=(id)=>dispatch=>
{
    dispatch({type:GET_USER_ORDER_REQUEST})
    return axios.get(`https://purplebackend.onrender.com/orders/singleUser/${id}`,{headers:{"token":localStorage.getItem("token")}})
    .then(r=>dispatch({type:GET_USER_ORDER_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:GET_USER_ORDER_FAILURE}))
}

export const getAllOrder=()=>dispatch=>
{
    dispatch({type:GET_ALL_ORDER_REQUEST})
    return axios.get(`https://purplebackend.onrender.com/orders/all`,{headers:{"token":localStorage.getItem("token")}})
    .then(r=>dispatch({type:GET_ALL_ORDER_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:GET_ALL_ORDER_FAILURE}))
}