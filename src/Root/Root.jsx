import React, { createContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { createUserWithEmailAndPassword , signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config"
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext();

const Root = () => {

    const provider = new GoogleAuthProvider();

    // Register a new user 
    const handleRegisterForm = (email , password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign up with Google account
    const handleGoogleSignIn = () => {
       return signInWithPopup(auth , provider)
    //    .then((result) => {
    //     console.log("hi")
    //     const user = result.user;
    //    console.log(user)
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode,errorMessage)
    //   });
    }


    const handleForm = {
        handleRegisterForm,
        handleGoogleSignIn
    }

    return (
        <div>
            <authContext.Provider value={handleForm}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </authContext.Provider>
        </div>
    );
};

export default Root;