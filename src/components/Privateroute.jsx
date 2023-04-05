import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/indexD";

const Privateroute=() => {

    if(isLoggedIn()){
        return <Outlet/>
    } else {
        return <Navigate to={"/LoginAsD"} /> ;
    }
    

}


export default Privateroute ;