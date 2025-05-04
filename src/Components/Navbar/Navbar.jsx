import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";


const Navbar = () => {

    const links = <>
        <li className="text-gray-100 text-xl font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="text-gray-100 text-xl font-bold"><NavLink to="/success">Success</NavLink></li>
        <li className="text-gray-100 text-xl font-bold"><NavLink to="/about">About</NavLink></li>
        <li className="text-gray-100 text-xl font-bold"><NavLink to="/contactUs">Contact Us</NavLink></li>
        <li className="ml-2 text-blue-900 text-xl font-semibold border border-blue-300 rounded-xl bg-blue-300"><NavLink to="/login">Login</NavLink></li>
        <li className="ml-3 text-purple-900 text-xl font-semibold border border-purple-300 rounded-xl bg-purple-300"><NavLink to="/register">Registration</NavLink></li>
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
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
