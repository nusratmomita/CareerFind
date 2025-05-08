import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Navigate, NavLink, useNavigate } from "react-router";
import { authContext } from "../../Root/Root";
import userIcon from "../../assets/user.png"
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    const {user , handleLogOut} = useContext(authContext);
    // console.log(user)


    const handlePhotoNavigation = () =>  {
      navigate("/myProfile");
    }

    const links = <>
        <li className="text-gray-100 text-xl font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="text-gray-100 text-xl font-bold"><NavLink to="/contactUs">Contact Us</NavLink></li>
        {/* <li className="ml-2 text-blue-900 text-xl font-semibold  rounded-xl bg-blue-300"><NavLink to="/login">Login</NavLink></li>
        <li className="ml-3 text-purple-900 text-xl font-semibold  rounded-xl bg-purple-300"><NavLink to="/register">Registration</NavLink></li> */}
    </>
  
    return (
    <div className="navbar bg-[#09213d] shadow-sm">
      <div className="flex-1">
        <div className="flex gap-10 p-1 ml-5">
          <img
            className="w-25 h-20 bg-white rounded-2xl"
            src={logo}
            alt="logo"
          />
          <h1 className="mt-5 -ml-8">
            <span className="text-gray-100 font-bold text-3xl">Career</span>
            <span className="text-gray-400 font-bold text-3xl">Find</span>
          </h1>
        </div>
      </div>
      <div className="flex-none">
        <ul className="navbarLinks menu menu-vertical lg:menu-horizontal px-1">
          {
            links
          }
             {
              !user ? (
                <>
                  <li className="mb-3 lg:mb-0 ml-2 text-blue-900 text-xl font-semibold rounded-xl bg-blue-300">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="ml-3 text-purple-900 text-xl font-semibold rounded-xl bg-purple-300">
                    <NavLink to="/register">Registration</NavLink>
                  </li>
                </>
              ) : (
                user && (
                  <>
                 
                    <img onClick={handlePhotoNavigation}
                      className="mb-3 lg:mb-0 lg:mr-4 w-10 h-10 mx-auto rounded-full border-2 border-white"
                      src={`${user ? user.photoURL : userIcon}`}
                      alt="User"
                    />
                   
                    <button onClick={handleLogOut} className="bg-blue-400 cursor-pointer border-2 border-black p-3 rounded-2xl"  >Log Out</button>
                  </>
                )
              )
            } 
            
        </ul>
      </div>
    </div>
  );
};

export default Navbar;