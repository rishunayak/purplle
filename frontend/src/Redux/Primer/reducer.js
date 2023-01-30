import { DELETE_PRIMER_FAILURE, DELETE_PRIMER_REQUEST, DELETE_PRIMER_SUCCESS, GET_PRIMER_FAILURE, GET_PRIMER_REQUEST, GET_PRIMER_SUCCESS, PATCH_PRIMER_FAILURE, PATCH_PRIMER_REQUEST, PATCH_PRIMER_SUCCESS, POST_PRIMER_FAILURE, POST_PRIMER_REQUEST, POST_PRIMER_SUCCESS } from "./actionTypes";



const initalValue=
{
    isLoading:false,
    isError:false,
    primer:[]
}

export const PrimerReducer=(state=initalValue,action)=>
{

    switch(action.type)
    {
        case GET_PRIMER_REQUEST : return {...state,isLoading:true};
        case GET_PRIMER_SUCCESS : return {...state,isLoading:false,primer:action.payload}
        case GET_PRIMER_FAILURE : return {...state,isLoading:false,isError:true}

        case POST_PRIMER_REQUEST : return {...state,isLoading:true};
        case POST_PRIMER_SUCCESS : {
            let data=[...primer,action.payload]
            return {...state,isLoading:false,primer:data}};
        case POST_PRIMER_FAILURE : return {...state,isLoading:false,isError:true}
        
        case PATCH_PRIMER_REQUEST : return {...state,isLoading:true};
        case PATCH_PRIMER_SUCCESS : {
           let data=primer.map((ele)=> {
             if(ele._id==action.payload._id)
             {
                return action.payload
             }
             else
             {
                return ele
             }
        })
        return {...state,isLoading:false,primer:data};
        };
        case PATCH_PRIMER_FAILURE: return {...state,isLoading:false,isError:true};

        case DELETE_PRIMER_REQUEST: return {...state,isLoading:true};
        case DELETE_PRIMER_SUCCESS: {
            let data=primer.filter((ele)=>ele._id!=action.payload.id)
            return {...state,isLoading:false,primer:data}
        };
        case DELETE_PRIMER_FAILURE : return {...state,isLoading:false,isError:true};
        default : return state
    }
}

