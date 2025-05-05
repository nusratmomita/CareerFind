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
import CompanyDetail from "../Pages/CompanyDetail/CompanyDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        children: [
           {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch("/CompanyData.json")
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
            path: "/companyDetail/:id",
            Component: CompanyDetail,
            loader: () => fetch("/CompanyData.json")
           },
           {
            path: "*",
            Component: ErrorPage
           },
        ]
    }
])