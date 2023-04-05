import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/indexD";

const PrivaterouteP=() => {

    if(isLoggedIn()){
        return <Outlet/>
    } else {
        return <Navigate to={"/LoginAsP"} /> ;
    }
    

}


export default PrivaterouteP ;