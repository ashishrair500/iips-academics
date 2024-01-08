import * as types from "../actionsTypes/fileFoldersActionTypes"
import { fire } from "../../config/firebase"
import { toast } from "react-toastify";
import { DELETE_FILE } from '../actionsTypes/fileFoldersActionTypes';
import { db, storage } from '../..//config/firebase';

/*
Action:- Actions are the plain Javascript objects that have a type field. Actions only tell what to do , but they don't tell how to do
*/
//-------------------------------------------------------------actions--1---------------------------------------------------------------------------------------

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});

//-------------------------------------------------------------actions--2---------------------------------------------------------------------------------------
//this is to get all the folders from the firebase

const addFolders = (payload) => ({
    type: types.ADD_FOLDERS,
    payload,
});

//-------------------------------------------------------------actions--3---------------------------------------------------------------------------------------

const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload,
});

//-------------------------------------------------------------actions--3---------------------------------------------------------------------------------------

const setChangeFolder = (payload) => ({
    type: types.CHANGE_FOLDER,
    payload,
});



const addFiles = (payload) => ({
    type: types.ADD_FILES,
    payload,
});



const addFile = (payload) => ({
    type: types.CREATE_FILE,
    payload,
});


const setFileData = (payload) => ({
    type: types.SET_FILE_DATA,
    payload,
});


// Action to update the UI after file deletion
const fileDeleted = (fileId) => ({
    type: 'FILE_DELETED',
    payload: { fileId },
});

//action Creators
/*Action Creator : Pure function which creates an action. Reusable , Portable and Easy to Test
*/
//------------------------------------------------------action---creator-----1----------------------------------------------------------------------------------

export const createFolder = (data) => (dispatch) => {
    fire
        .firestore()
        .collection('folders')
        .add(data)
        .then(async (folder) => {
            const folderData = await (await folder.get()).data();
            const folderId = folder.id;
            dispatch(addFolder({ data: folderData, docId: folderId }));
            alert('Folder created successfully')

        })
}

//----------------------------------------------------------------action--creator--2---------------------------------------------------------------------------
//this to get all the folders of the user who is logged in

export const getFolders = (userId) => (dispatch) => {
    dispatch(setLoading(true))
    fire
        .firestore()
        .collection('folders')

        //here i have replaced userId with admin id T3XBsF3xtDMgTRQIi7xVQYqffpe2

        .where('userId', '==', "T3XBsF3xtDMgTRQIi7xVQYqffpe2")
        .get()
        .then((folders) => {
            const foldersData = folders.docs.map((folder) => ({
                data: folder.data(),
                docId: folder.id,
            })

            )
            //this is to get all the folders from the firebase
            dispatch(setLoading(false))  //if you have to check this again
            dispatch(addFolders(foldersData))

        })
}

//----------------------------------------------------------------action--creator--3---------------------------------------------------------------------------

export const changeFolder = (folderId) => (dispatch) => {
    dispatch(setChangeFolder(folderId))
}




// files

export const getFiles = (userId) => (dispatch) => {
    fire
        .firestore()
        .collection('files')
        .where('userId', '==', "T3XBsF3xtDMgTRQIi7xVQYqffpe2")
        .get()
        .then((files) => {
            const filesData = files.docs.map((file) => ({
                data: file.data(),
                docId: file.id,
            })

            )

            dispatch(addFiles(filesData))
        })
}

export const createFile = (data, setSuccess) => (dispatch) => {

    fire
        .firestore()
        .collection('files')
        .add(data)
        .then(async (file) => {
            const fileData = await (await file.get()).data();
            const fileId = file.id;
            dispatch(addFile({ data: fileData, docId: fileId }));
            setSuccess(true)
            alert('File created successfully')

        }).catch((err) => {
            console.log(err)
            setSuccess(false)
        })
}

export const updateFileData = (fileId, data) => (dispatch) => {

    fire
        .firestore()
        .collection('files')
        .doc(fileId)
        .update({ data })
        .then(() => {
            dispatch(setFileData({ fileId, data }))
            alert('File updated successfully')
        }).catch((err) => {
            console.log(err)
        })
}


export const uploadFile = (file, data, setSuccess) => (dispatch) => {

    const uploadFileRef = fire.storage().ref(`files/${data.userId}/${data.name}`);
    uploadFileRef.put(file).on('state_changed', (snapshot) => {

        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("uploading " + progress + "% done");


    }, (err) => {
        console.log(err)
    }, async () => {
        const fileUrl = await uploadFileRef.getDownloadURL();
        const fileData = { ...data, url: fileUrl };
        fire.firestore().collection('files').add(fileData).then(async (file) => {
            const fileData = await (await file.get()).data();
            const fileId = file.id;
            dispatch(addFile({ data: fileData, docId: fileId }));
            toast.success('File uploaded successfully')
            setSuccess(true)
        }).catch((err) => {
            console.log(err)

        }
        )
    }

    )


}

export const deleteFile = (fileId) => async (dispatch, getState) => {
    try {
        const state = getState();
        const userId = state.auth.user.uid;

        // Log the userId and fileId for debugging
        console.log('UserId:', userId);
        console.log('FileId:', fileId);

        // Get the file reference from Firestore
        const fileRef = db.collection('users').doc(userId).collection('files').doc(fileId);

        // Log the Firestore document data for debugging
        const fileDoc = await fileRef.get();
        console.log('Firestore Document Data:', fileDoc.data());

        // Delete the file data from Firestore
        await fileRef.delete();


        /* Delete the file data from Firestore
        db.collection('users').doc(userId).collection('files').doc(fileId).delete();
        */

        // Delete the file from Firebase Storage
        const storageRef = storage.ref(`files/${userId}/${fileId}`);
        console.log('Storage Reference Path:', storageRef.fullPath);
        await storageRef.delete();

        // Dispatch an action to update the UI (you need to implement this action)
        dispatch(fileDeleted(fileId));
    } catch (error) {
        console.error('Error deleting file:', error.message);
        // You can dispatch an action here to handle errors or show a notification
    }
};

