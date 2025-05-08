import React, { useContext } from "react";
import {  Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { authContext } from "../../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
// import { updateProfile } from "firebase/auth";

const Register = () => {
  const { handleRegisterForm, handleGoogleSignIn , updateUser , setUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    // console.log(photoURL)

    if (!email || !password || !name) {
      toast.error("Fill all the fields to create an account!")
      return;
    }

    if(!/[A-Z]/.test(password)){
      toast.error("Password must contain at least one Uppercase Letter.")
      return;
    }

    if(!/[a-z]/.test(password)){
      toast.error("Password must contain at least one Lowercase Letter.")
      return;
    }

    if(password.length < 6){
      toast.error("Password must at least 6 characters long.")
      return;
    }

    // register with email and password
    handleRegisterForm(email, password)
    .then((result) =>{
      const user = result.user;
      updateUser({displayName:name , photoURL:photo})
      .then(()=>{
        setUser({...user ,displayName:name , photoURL:photo})
        navigate("/")
      })
      .catch(()=>{
        toast.error("You have put invalid credentials")
        setUser(user)
      })
    })
    
  };

  // register with Google account
  const handleGoogle = () => {
    handleGoogleSignIn()
      .then(() => {
        // const user = userCredential.user;
        // console.log(user)
        navigate(location?.state ||  "/")
      })
      .catch(() => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
    <Helmet>
      <title>Register</title>
    </Helmet>
      <ToastContainer></ToastContainer>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-800 text-white mx-auto my-10">
        <h1 className="mt-7 mb-10 font-bold text-3xl text-center">
          Please Register
        </h1>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleRegisterSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="text" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photo" className="block text-sm">
                Upload Photo
              </label>
              <input className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
               type="text" id="image_url" name="photo" placeholder="Enter image URL"/>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Register
          </button>
          <hr className="w-full dark:text-gray-600" />
          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogle}
              aria-label="Register with Google"
              type="button"
              className="cursor-pointer flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Register with Google</p>
            </button>
            <p className="text-center font-medium">
              Already have an Account? {" "}
              <NavLink className="underline" to="/login">
                Login here
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
