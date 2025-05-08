import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RecentJobs from "../Pages/RecentJobs/RecentJobs";
import CompanyDetail from "../Pages/CompanyDetail/CompanyDetail";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import MyProfile from "../Components/MyProfile/MyProfile";
import Recruiters from "../Pages/Recruiters/Recruiters";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

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
            path: "/contactUs",
            element: <PrivateRoute>
                        <ContactUs></ContactUs>
                     </PrivateRoute>
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
            path: "/myProfile",
            element: <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>,
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
            path: "/forgetPassword",
            Component: ForgetPassword,
           },
           {
            path: "/updateProfile",
            Component: UpdateProfile,
           },
           {
            path: "/companyDetail/:id",
            element: <PrivateRoute>
                        <CompanyDetail></CompanyDetail>
                    </PrivateRoute>,
            loader: () => fetch("/CompanyData.json")
           },
           {
            path: "*",
            Component: ErrorPage
           },
        ]
    }
])