import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"

const routesList=[
    {
path:'/',
element:<Home/>

    },{
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    }
]

export const routes=createBrowserRouter(routesList)