import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Success from "../Pages/Success/Success";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Recruiters from "../Pages/RecentJobs/RecentJobs";
import RecentJobs from "../Pages/RecentJobs/RecentJobs";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        children: [
           {
            index: true,
            path: "/",
            Component: Home,
           },
           {
            path: "/about",
            Component: About
           },
           {
            path: "/success",
            Component: Success
           },
           {
            path: "/contactUs",
            Component: ContactUs
           },
           {
            path: "/login",
            Component: Login
           },
           {
            path: "/register",
            Component: Register
           },
           {
            path: "/recruiter",
            Component: Recruiters,
           },
           {
            path: "/recentlyAddedJobs",
            Component: RecentJobs,
           },
           {
            path: "*",
            Component: ErrorPage
           },
        ]
    }
])