import React, { useContext } from 'react';
import { authContext } from '../../Root/Root';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
    const {user} = useContext(authContext)
    // console.log(user)

    const navigate = useNavigate();
    return (
        <div>
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            <div className="card max-md: mx-auto mt-20 w-96 bg-base-100 card-lg shadow-sm">
                <div className="card-body">
                    <div className='flex gap-10'>
                        <img className="w-12 h-10"src={user.photoURL} alt="user" />
                        <h2 className="card-title">Hello , {user.displayName}!</h2>
                    </div>
                    <p>Your email : {user.email}</p>
                    
                    <div className="justify-end card-actions">
                        <p className="">Your last sign in time : {user.metadata.lastSignInTime} </p>
                    </div>
                    <div className='flex gap-5'>
                    <button className='btn btn-secondary' onClick={()=>navigate("/")}>Get back to home</button>
                    <button className='btn btn-primary'  onClick={()=>navigate("/updateProfile")}>Update Your Profile</button>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default MyProfile;