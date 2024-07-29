import React from "react";
import { Navigate } from "react-router-dom";

const LoginLock=({children,needLoggedIn})=>{
    let loggedIn=true;
    if(needLoggedIn){
        if(!loggedIn) return <Navigate to={`/registration`}/>
        return <>{children}</>
    }
    if(loggedIn) return <Navigate to={`/`}/>
    return <>{children}</>
}

export default LoginLock