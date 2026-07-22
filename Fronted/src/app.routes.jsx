import {createBrowserRouter} from "react-router";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/register";





export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element:<Register/>

    }
])

