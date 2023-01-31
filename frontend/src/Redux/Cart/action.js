import axios from "axios"
import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUEST, POST_CART_SUCCESS } from "./actionTypes"



export const  getCart=()=>dispatch=>
{
    dispatch({type:GET_CART_REQUEST})
    return axios.get("https://purplebackend.onrender.com/carts",{headers:{token:localStorage.getItem("token")}})
    .then(r=>dispatch({type:GET_CART_SUCCESS,payload:r.data.products}))
    .catch(e=>dispatch({type:GET_CART_FAILURE}))
}

export const postCart=(product)=>dispatch=>
{
    dispatch({type:POST_CART_REQUEST})
    return axios.post("https://purplebackend.onrender.com/carts/addToCart",product,{headers:{token:localStorage.getItem("token")}})
    .then(r=>dispatch({type:POST_CART_SUCCESS,payload:product,msg:r.data}))
    .catch(e=>dispatch({type:POST_CART_FAILURE}))
}

export const patchCart=({productId,quantity})=>dispatch=>
{
    console.log(productId,quantity)
    dispatch({type:PATCH_CART_REQUEST})
    return axios.patch("https://purplebackend.onrender.com/carts/update",{productId,quantity},{headers:{token:localStorage.getItem("token")}})
    .then(r=>dispatch({type:PATCH_CART_SUCCESS,payload:{productId,quantity},msg:r.data}))
    .catch(e=>dispatch({type:PATCH_CART_FAILURE}))
}

const update=()=>
{
  return 
}

export const deleteCart=(productId)=>dispatch=>
{
   
    dispatch({type:DELETE_CART_REQUEST})
    return axios.patch("https://purplebackend.onrender.com/carts/delete",{productId:productId},{headers:{token:localStorage.getItem("token")}})
    .then(r=>{dispatch(getCart());return {msg:"Product Delete Succssfully"}})
    .catch(r=>console.log(r))

}

