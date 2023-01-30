import axios from "axios"
import { GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS } from "./actionTypes"



export const getUserCart=(id)=>dispatch=>
{
    dispatch({type:GET_USER_CART_REQUEST})
    axios.get(`https://purplebackend.onrender.com/carts/user/${id}`,{headers:{"token":localStorage.getItem("token")}})
    .then(r=>dispatch({type:GET_USER_CART_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:GET_USER_CART_FAILURE}))
}