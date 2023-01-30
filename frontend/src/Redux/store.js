

import { legacy_createStore, applyMiddleware,compose,combineReducers,} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./User/reducer";
import { ShampooReducer } from "./Shampoo/reducer";
import { PrimerReducer } from "./Primer/reducer";
import { FaceWashReducer } from "./FaceWash/reducer";
import { AllUserReducer } from "./AllUser/reducer";
import { UserCartReducer } from "./AdminUserDetails/reducer";
import { UserOrderReducer } from "./AdminOrderDetails/reducer";
import { CartReducer } from "./Cart/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ AuthReducer,ShampooReducer,PrimerReducer,FaceWashReducer,AllUserReducer,UserCartReducer,UserOrderReducer,CartReducer});
export const store = legacy_createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)));