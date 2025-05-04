import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

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
           }
        ]
    }
])