import React from 'react';
import errorImage from "../../assets/Error.png"
import { NavLink } from 'react-router';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    return (
        <div className='flex gap-20 justify-center items-center'>
            <Helmet>
                <title>Error Page</title>
            </Helmet>
            <img src={errorImage} alt="errorImage"/>
            <div className='text-center  space-y-6'>
                <h1 className='text-5xl font-bold'>Sorry!😌 Wrong Page</h1>
                <p className='text-4xl font-bold animate-bounce'>[ Get back to work ]</p>
                <NavLink to="/"><button className='ml-5 cursor-pointer bg-blue-200 p-3 font-bold rounded-2xl -rotate-6'>Home</button></NavLink>
                <NavLink to="/login"><button className='ml-5 cursor-pointer bg-purple-200 p-3 font-bold rounded-2xl'>Login</button></NavLink>
                <NavLink to="/register"><button className='ml-5 cursor-pointer bg-red-200 p-3 font-bold rounded-2xl rotate-6'>Register</button></NavLink>
            </div>
            
        </div>
    );
};

export default ErrorPage;