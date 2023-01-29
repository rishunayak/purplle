import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionTypes"

const initalValue=
{
    isLoading:false,
    isError:false,
    allUser:[]
}

export const AllUserReducer=(state=initalValue,action)=>
{
    switch(action.type)
    {
        case GET_USER_REQUEST:return{...state,isLoading:true};
        case GET_USER_SUCCESS:return{...state,isLoading:false,allUser:r.data}
        case GET_USER_FAILURE:return{...state,isLoading:false,isError:true}
      
        default : return state
    }
}