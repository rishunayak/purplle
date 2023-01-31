import axios from "axios"
import { GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./actionTypes"



export const getUserOrder=(id)=>dispatch=>
{
    dispatch({type:GET_USER_ORDER_REQUEST})
    axios.get(`https://purplebackend.onrender.com/orders/singleUser/${id}`,{headers:{"token":localStorage.getItem("token")}})
    .then(r=>dispatch({type:GET_USER_ORDER_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:GET_USER_ORDER_FAILURE}))
}