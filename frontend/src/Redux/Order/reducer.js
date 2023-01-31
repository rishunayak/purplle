import { GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, POST_ORDER_FAILURE, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from "./actionTypes"


const initalValue={
    isLoading:false,
    isError:false,
    order:[]
}

export const OrderReducer=(state=initalValue,action)=>
{
    switch(action.type)
    {
        case GET_ORDER_REQUEST : return {...state,isLoading:true}
        case GET_ORDER_SUCCESS : return {...state,isLoading:false,order:action.payload}
        case GET_ORDER_FAILURE : return {...state,isLoading:false,isError:true}

        case POST_ORDER_REQUEST : return {...state,isLoading:true}
        case POST_ORDER_SUCCESS : {
            let updateData=[...state.order,...action.payload]
            return {...state,isLoading:false,order:updateData}
        };
        case POST_ORDER_FAILURE : return {...state,isLoading:false,isError:true}
        
        default : return state
    }
    
}