import axios from "axios"
import { GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, POST_ORDER_FAILURE, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from "./actionTypes"



export const getOrder=()=>dispatch=>
{
    dispatch({type:GET_ORDER_REQUEST})
    return axios.get("https://purplebackend.onrender.com/orders",{headers:{token:localStorage.getItem("token")}})
    .then(r=>dispatch({type:GET_ORDER_SUCCESS,payload:r.data.products}))
    .catch(r=>dispatch({type:GET_ORDER_FAILURE}))
}

export const postOrder=(item)=>dispatch=>
{
    dispatch({type:POST_ORDER_REQUEST})
    return axios.post("https://purplebackend.onrender.com/orders/done",item,{headers:{token:localStorage.getItem("token")}})
    .then((r)=>dispatch({type:POST_ORDER_SUCCESS,payload:item}))
    .catch(e=>dispatch({type:POST_ORDER_FAILURE}))
}