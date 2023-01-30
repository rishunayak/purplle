import { GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./actionTypes"


const initalValue=
{
    isLoading:false,
    isError:false,
    order:{}
}

export const UserOrderReducer=(state=initalValue,action)=>
{
   switch(action.type)
   {
    case GET_USER_ORDER_REQUEST:return {...state,isLoading:true}
    case GET_USER_ORDER_SUCCESS:return {...state,isLoading:false,order:action.payload}
    case GET_USER_ORDER_FAILURE:return {...state,isLoading:false,isError:true}
    default : return state
   }
}