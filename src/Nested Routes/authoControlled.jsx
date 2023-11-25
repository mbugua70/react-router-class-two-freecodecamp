import { Navigate, Outlet } from "react-router-dom"


const AuthControlled = () =>{
    const isLoggedIn = true;
   if(!isLoggedIn){
    return <Navigate to="/login" />
   }
   return <Outlet/>
}

export default AuthControlled;