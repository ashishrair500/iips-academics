//How to do
/*
Reducer: Reducers are the functions that take the current state and an action as arguments, and return a new state result
*/

import * as types from "../actionsTypes/fileFoldersActionTypes"
import { DELETE_FILE } from '../actionsTypes/fileFoldersActionTypes';
const initialState = {  
    // initial state  
  isLoading : true,
  currentFolder : "root",
  userFolders : [],
  userFiles : [],
  adminFolders : [],
  adminFiles : [],

};

const fileFoldersReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.CREATE_FOLDER:
            return {
                ...state,
                userFolders : [...state.userFolders, action.payload]

               
            };
        case types.ADD_FOLDERS:  //this is to get all the folders from the firebase
            return {
                ...state,
                userFolders : action.payload
            };
        case types.SET_LOADING:    //is to get folder and loading
            return {
                ...state,
                isLoading : action.payload
            };
        case types.CHANGE_FOLDER:
            return {
                ...state,
                currentFolder : action.payload
            };
        case types.ADD_FILES:
            return {
                ...state,
                userFiles : action.payload
            };
        case types.CREATE_FILE:
            return {
                ...state,
                userFiles : [...state.userFiles, action.payload]
            };
            case types.DELETE_FILE:
 
                const fileIdToDelete = action.payload.fileId;
                
                return {
                  ...state,
                  userFiles: state.userFiles.filter(file => file.docId !== fileIdToDelete),
                };
                
        case types.SET_FILE_DATA:
         const {fileId , data} = action.payload;
         const allFiles = [...state.userFiles];
         const currentFile = allFiles.find(file => file.docId === fileId);
         currentFile.data.data = data;
         return {
             ...state,
             userFiles : state.userFiles.map(file => file.docId === fileId ? currentFile : file)
              
         }
        default:
        return state;
    }
}
export default fileFoldersReducer;
