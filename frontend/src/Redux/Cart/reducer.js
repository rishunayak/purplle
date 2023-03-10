import { DELETE_ALL_CART_FAILURE, DELETE_ALL_CART_REQUEST, DELETE_ALL_CART_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUEST, POST_CART_SUCCESS } from "./actionTypes"


const initalValue={
    isLoading:false,
    isError:false,
    cart:[],
    id:""
}

export const CartReducer=(state=initalValue,action)=>
{
    switch(action.type)
    {
        case GET_CART_REQUEST : return {...state,isLoading:true};
        case GET_CART_SUCCESS:return {...state,isLoading:false,cart:action.payload.products,id:action.payload._id};
        case GET_CART_FAILURE : return {...state,isLoading:false,isError:true};
        
  
        case POST_CART_REQUEST : return {...state,isLoading:true};
        case POST_CART_SUCCESS : {
            let updateCart=[...state.cart,action.payload];
            return {...state,isLoading:false,cart:updateCart};
        };
        case POST_CART_FAILURE : return {...state,isLoading:false,isError:true};

        case PATCH_CART_REQUEST : return {...state,isLoading:true};
        case PATCH_CART_SUCCESS : {
            let updateCart=state.cart.map((ele)=>
            {
                if(ele._id==action.payload.productId)
                {
                    ele.quantity=action.payload.quantity    
                }
                return ele
            })
            return {...state,isLoading:false,cart:updateCart}
        };
        case PATCH_CART_FAILURE : return {...state,isLoading:false,isError:true};
   
        case DELETE_CART_REQUEST : return {...state,isLoading:true};
        case DELETE_CART_SUCCESS : {
            // let updateCart=state.cart.map(ele=>{
            //     if(ele._id!=action.payload)
            //     {
            //         return ele
            //     }
            // })
            return {...state,isLoading:false};
        }
        case DELETE_CART_FAILURE : return {...state,isLoading:false,isError:true};

        case DELETE_ALL_CART_REQUEST : return {...state,isLoading:true}
        case DELETE_ALL_CART_SUCCESS : return {...state,isLoading:false,cart:initalValue.cart}
        case DELETE_ALL_CART_FAILURE : return {...state,isLoading:false,isError:true}
        default : return state
    }
}