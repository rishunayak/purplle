import { DELETE_FACE_WASH_FAILURE, DELETE_FACE_WASH_REQUEST, DELETE_FACE_WASH_SUCCESS, GET_FACE_WASH_FAILURE, GET_FACE_WASH_REQUEST, GET_FACE_WASH_SUCCESS, PATCH_FACE_WASH_FAILURE, PATCH_FACE_WASH_REQUEST, PATCH_FACE_WASH_SUCCESS, POST_FACE_WASH_FAILURE, POST_FACE_WASH_REQUEST, POST_FACE_WASH_SUCCESS } from "./actionTypes";



const initalValue=
{
    isLoading:false,
    isError:false,
    faceWash:[]
}

export const FaceWashReducer=(state=initalValue,action)=>
{

    switch(action.type)
    {
        case GET_FACE_WASH_REQUEST : return {...state,isLoading:true};
        case GET_FACE_WASH_SUCCESS : return {...state,isLoading:false,faceWash:action.payload}
        case GET_FACE_WASH_FAILURE : return {...state,isLoading:false,isError:true}

        case POST_FACE_WASH_REQUEST : return {...state,isLoading:true};
        case POST_FACE_WASH_SUCCESS : {
            let data=[...state.faceWash,action.payload]
            return {...state,isLoading:false,faceWash:data}};
        case POST_FACE_WASH_FAILURE : return {...state,isLoading:false,isError:true}
        
        case PATCH_FACE_WASH_REQUEST : return {...state,isLoading:true};
        case PATCH_FACE_WASH_SUCCESS : {
           let data=state.faceWash.map((ele)=> {
             if(ele._id==action.payload._id)
             {
                return action.payload
             }
             else
             {
                return ele
             }
        })
        return {...state,isLoading:false,faceWash:data};
        };
        case PATCH_FACE_WASH_FAILURE: return {...state,isLoading:false,isError:true};

        case DELETE_FACE_WASH_REQUEST: return {...state,isLoading:true};
        case DELETE_FACE_WASH_SUCCESS: {
            let data=state.faceWash.filter((ele)=>ele._id!=action.payload.id)
            return {...state,isLoading:false,faceWash:data}
        };
        case DELETE_FACE_WASH_FAILURE : return {...state,isLoading:false,isError:true};
        default : return state
    }
}

