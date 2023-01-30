import { GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS } from "./actionTypes"


const initalValue=
{
    isLoading:false,
    isError:false,
    cart:{}
}

export const UserCartReducer=(state=initalValue,action)=>
{
   switch(action.type)
   {
    case GET_USER_CART_REQUEST:return {...state,isLoading:true}
    case GET_USER_CART_SUCCESS:return {...state,isLoading:false,cart:action.payload}
    case GET_USER_CART_FAILURE:return {...state,isLoading:false,isError:true}
    default : return state
   }
}