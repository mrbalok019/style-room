import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout'

import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes2 from "../PrivateRoutes/PrivateRoutes2";
import ErrorPage from "../components/Error/ErrorPage";
import PlotDetails from "../pages/Home/plots/PlotDetails";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Appointment from "../pages/Appointment/Appointment";

const router = createBrowserRouter(
    
    [
        {
        
        
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage/>,
        children:[
            {   
                path:'/',
                element: <Home></Home>,
                // loader:()=>fetch('/estatesData.json')
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/registration',
                element: <PrivateRoutes2><Registration></Registration></PrivateRoutes2>,
            },
            {
                path:'/profile',
                element: <PrivateRoutes><Profile/></PrivateRoutes>,
            },
            {
                path:'/updateprofile',
                element: <PrivateRoutes><UpdateProfile/></PrivateRoutes>,
            },
            
       
        ]
    }
    ]);

    export default router;