import fileFoldersReducer from "./fileFoldersReducer";
 
import { combineReducers } from "redux";

import authReducer from "./authreducer";


const rootReducer =
 combineReducers({ 
    auth: authReducer, 
    filefolders: fileFoldersReducer ,
});



export default rootReducer;
