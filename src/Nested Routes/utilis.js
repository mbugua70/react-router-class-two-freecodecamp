/* eslint-disable no-undef */
import { redirect } from "react-router-dom";


export async function requireAuth(request){
     const pathname = new URL(request.url).pathname
    const isLoggedIn = true;
    console.log(isLoggedIn);
    if (!isLoggedIn) {
    //  checking if user is logged in
    const response = redirect(`/login?message=You must log in first!!&redirectTo=${pathname}`)
    response.body = true  // It's silly, but it works
    return response
    //  return redirect(`/login?message=You must log in first!!&redirectTo=${pathname}`)

    }
 return null
}