

import { legacy_createStore, applyMiddleware,compose,combineReducers,} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./User/reducer";
import { ShampooReducer } from "./Shampoo/reducer";
import { PrimerReducer } from "./Primer/reducer";
import { FaceWashReducer } from "./FaceWash/reducer";
import { AllUserReducer } from "./AllUser/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ AuthReducer,ShampooReducer,PrimerReducer,FaceWashReducer,AllUserReducer});
export const store = legacy_createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)));