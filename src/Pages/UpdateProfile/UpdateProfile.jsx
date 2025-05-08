import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../Root/Root";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
    const { updateUser,setUser } = useContext(authContext);
    // console.log(user.displayName)
    const [ , setName] = useState("")
    const [ , setPhotoURL] = useState("")

    const navigate = useNavigate()

    // updateUser()

    const handleUpdateForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photoURL = e.target.photoURL.value
        if(!name || !photoURL){
            toast.error("Fields can't be empty.Enter information correctly")
            return;
        }

        updateUser({
            displayName: name, photoURL: photoURL 
        })
        .then(()=>{
                setUser({displayName:name , photoURL:photoURL})
                navigate("/")
              })
              .catch(()=>{
                toast.error("Your profile is not correctly updated")
                // setUser(user)
              })
    }
  return (
    <div>
    <ToastContainer></ToastContainer>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <form onSubmit={handleUpdateForm} className="fieldset mx-auto m-20 bg-base-200 border-base-300 rounded-box w-xs border p-4">

        <h1 className="text-center text-blue-700 text-3xl font-bold mb-5">Update Profile</h1>

        <label className="label text-black text-xl font-bold">Name</label>
        <input type="name" name="name" className="input" placeholder="Name" 
                onChange={(e)=>setName(e.target.value)}/>

        <label className="label text-black text-xl font-bold">Photo URL</label>
        <input type="text" name="photoURL" className="input" placeholder="Photo URL"
                onChange={(e)=>setPhotoURL(e.target.value)} />

        <button onClick={updateUser} type="submit"
        className="btn btn-primary mt-4">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
