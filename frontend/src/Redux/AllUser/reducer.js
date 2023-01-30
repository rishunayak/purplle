import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, PATCH_USER_FAILURE, PATCH_USER_REQUEST, PATCH_USER_SUCCESS } from "./actionTypes"

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
        case GET_USER_SUCCESS:return{...state,isLoading:false,allUser:action.payload}
        case GET_USER_FAILURE:return{...state,isLoading:false,isError:true}

        case PATCH_USER_REQUEST:return{...state,isLoading:true};
        case PATCH_USER_SUCCESS:{
            let data=state.allUser.map((ele)=>{
                if(ele._id==action.payload.id)
                {
                    return action.payload
                }
                else
                {
                    return ele
                }
            })
            return {...state,isLoading:false,allUser:data}
        };
        case PATCH_USER_FAILURE:return {...state,isLoading:false,isError:true}
      
        default : return state
    }
}