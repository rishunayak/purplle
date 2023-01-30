import { GET_ALL_ORDER_FAILURE, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./actionTypes"


const initalValue=
{
    isLoading:false,
    isError:false,
    order:{},
    allOrder:0,
    userOrder:0
}

export const UserOrderReducer=(state=initalValue,action)=>
{
   switch(action.type)
   {
    case GET_USER_ORDER_REQUEST:return {...state,isLoading:true}
    case GET_USER_ORDER_SUCCESS:return {...state,isLoading:false,order:action.payload}
    case GET_USER_ORDER_FAILURE:return {...state,isLoading:false,isError:true}
    case GET_ALL_ORDER_REQUEST : return {...state,isLoading:true}
    case GET_ALL_ORDER_SUCCESS : {
         action.payload.map(ele=>{
            state.allOrder=state.allOrder+ele.products.length
            state.userOrder=state.userOrder+1
         })
         return {...state,isLoading:false}
    };
    case GET_ALL_ORDER_FAILURE: return {...state,isLoading:false,isError:true}
    default : return state
   }
}
