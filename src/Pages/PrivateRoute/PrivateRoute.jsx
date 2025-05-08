import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authContext } from "../../Root/Root";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  // console.log(user);
  const location = useLocation();
  //   console.log(location)

  if(loading){
    return <span className="loading loading-ball loading-xl"></span>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

export default PrivateRoute;
