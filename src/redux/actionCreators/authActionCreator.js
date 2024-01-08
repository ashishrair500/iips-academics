// what to do

import * as types from "../actionsTypes/authActionTypes"
import {fire} from "../../config/firebase"
import { toast } from "react-toastify";

/*
Action:- Actions are the plain Javascript objects that have a type field. Actions only tell what to do , but they don't tell how to do
*/
//-------------------------------------------------------------actions--1---------------------------------------------------------------------------------------

const loginUser = (payload)=>{
    return{

        //this is a object called action object that has type field 

        type : types.SIGN_IN,
        payload,
    };
};

//-------------------------------------------------------------actions--2---------------------------------------------------------------------------------------

const logoutUser = ( )=>{
    return{
        type : types.SIGN_OUT,
        
    };
};

//action creator
//----------------------------------------------------------------action creator-1---------------------------------------------------------------------------

export const signInUser = (email,password,setSuccess) =>(dispatch)=>{
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(user=>{
       dispatch(loginUser({
        uid:user.user.uid,

/* yaha pr me apni id ko hard code kr dunga mtlab jab bhi koi user signUp karga tab firebase promise me user id return karta hai jis id ki hep se user apne files and folders ko access karta hai.lekin me yaha pr apni matlab admin ki user id ko hard code kr dunga taki jo files and folder admin ke hai usse koi bhi user access kar sake;
                create folder ,upload file , create file button ko disable kr denge ta jab userid !==admin id
                */

        email:user.user.email,
        displayName: user.user.displayName,
    
    
    }))
       setSuccess(true)
    })
    .catch((error)=>{
        toast.error("Invalid Email or Password");
        
});
}

//-----------------------------------------------------action creator-2-----------------------------------------------------------------------------------------
/*name,email,password,setSuccess are coming from RegisterForm through the use of dispatcher after getting all these parameter user is created ,then after usercreated this method return a promise like uid ,name,email,  and also setting setSucces to true. */

export const signUpUser = (name,email,password,setSuccess) =>(dispatch)=>{
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((user)=>{
        fire.auth()
        .currentUser.updateProfile({
            displayName:name,
        })
        .then(()=>{
            //after login we are getting these things from the firebase
            const currentUser =  fire.auth().currentUser;
             dispatch(
                loginUser({
                    uid:currentUser.uid,
                    name:currentUser.displayName,
                    email:currentUser.email,
                })
             );
             setSuccess(true)
        })
        .catch((error) =>{
            console.log(error);
            
        });
    })
    .catch((error)=>{
        if(error.code === "auth/email-already-in-use"){
            toast.error("Email aleady in Use")
        }
        if(error.code === "auth/invalid-email"){
            toast.error("Invalid Email")
        }
        if(error.code === "auth/weak-password"){
            toast.error("Weak Password")
        }
    })

};

//-----------------------------------------------------------action--creator-3-----------------------------------------------------------------------------------
//to sign out user whenever it click on logout button

export const signOutUser = () =>(dispatch)=>{
    fire.auth().signOut().then(()=>{
    dispatch(logoutUser());})
}

//---------------------------------------------------------------action-creator-4-----------------------------------------------------------------------------
//to check whether the user is logged in or not

export const checkIsLoggedIn = () =>(dispatch)=>{
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            dispatch(loginUser({
                uid:user.uid,
                displayName:user.displayName,
                email:user.email,
            }))
        }
        
    })
}