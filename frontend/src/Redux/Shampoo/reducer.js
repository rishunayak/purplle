import { DELETE_SHAMPOO_FAILURE, DELETE_SHAMPOO_REQUEST, DELETE_SHAMPOO_SUCCESS, GET_SHAMPOO_FAILURE, GET_SHAMPOO_REQUEST, GET_SHAMPOO_SUCCESS, PATCH_SHAMPOO_FAILURE, PATCH_SHAMPOO_REQUEST, PATCH_SHAMPOO_SUCCESS, POST_SHAMPOO_FAILURE, POST_SHAMPOO_REQUEST, POST_SHAMPOO_SUCCESS } from "./actionTypes";



const initalValue=
{
    isLoading:false,
    isError:false,
    shampoo:[]
}

export const ShampooReducer=(state=initalValue,action)=>
{

    switch(action.type)
    {
        case GET_SHAMPOO_REQUEST : return {...state,isLoading:true};
        case GET_SHAMPOO_SUCCESS : return {...state,isLoading:false,shampoo:action.payload};
        case GET_SHAMPOO_FAILURE : return {...state,isLoading:false,isError:true};

        case POST_SHAMPOO_REQUEST : return {...state,isLoading:true};
        case POST_SHAMPOO_SUCCESS : {
            let data=[...state.shampoo,action.payload]
            return {...state,isLoading:false,shampoo:data}};
        case POST_SHAMPOO_FAILURE : return {...state,isLoading:false,isError:true};
        
        case PATCH_SHAMPOO_REQUEST : return {...state,isLoading:true};
        case PATCH_SHAMPOO_SUCCESS : {
           let data=state.shampoo.map((ele)=> {
             if(ele._id==action.payload._id)
             {
                return action.payload
             }
             else
             {
                return ele
             }
        })
        return {...state,isLoading:false,shampoo:data};
        };
        case PATCH_SHAMPOO_FAILURE: return {...state,isLoading:false,isError:true};

        case DELETE_SHAMPOO_REQUEST: return {...state,isLoading:true};

        case DELETE_SHAMPOO_SUCCESS: {
             console.log(action.payload,"p")
            let data=state.shampoo.filter((ele)=>ele._id!=action.payload);
            return {...state,isLoading:false,shampoo:data}
        };

        case DELETE_SHAMPOO_FAILURE : return {...state,isLoading:false,isError:true};
        default : return state
    }
}

