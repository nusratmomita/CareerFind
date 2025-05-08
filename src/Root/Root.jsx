import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config"
import { GoogleAuthProvider } from "firebase/auth";
import { FaSignOutAlt } from 'react-icons/fa';

export const authContext = createContext();

const Root = () => {

    const [user , setUser] = useState(null)

    const provider = new GoogleAuthProvider();

    // Register a new user 
    const handleRegisterForm = (name, email , password , photoURL) => {
        updateProfile(auth.currentUser, {
            displayName:name , photoURL: photoURL
          }).then(() => {
          }).catch(() => {
          });
        return createUserWithEmailAndPassword(auth,email,password,photoURL)
          
    }

    // Registration with Google account
    const handleGoogleSignIn = () => {
       return signInWithPopup(auth , provider)
    }

    // handle Login
    const handleLoginForm = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // handle google login
    const handleGoogleLogin = () => {
        return signInWithPopup(auth,provider)
    }

    // handle log out
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[])


    const handleForm = {
        handleRegisterForm,
        handleGoogleSignIn,
        handleLoginForm ,
        handleGoogleLogin,
        handleLogOut,
        user
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