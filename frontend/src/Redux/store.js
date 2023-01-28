

import { legacy_createStore, applyMiddleware,compose,combineReducers,} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./User/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ AuthReducer});
export const store = legacy_createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)));