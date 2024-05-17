/* eslint-disable react-refresh/only-export-components */
// import React from "react";
// import { useSearchParams } from "react-router-dom";
import {  Form, redirect, useActionData, useNavigation, useLoaderData } from "react-router-dom";
import "./index.css"
import { loginUser } from "./api";

// using loader to pass the message down

export const loginLoader = ({request}) => {
//   console.log(request.url)
return new URL(request.url).searchParams.get("message")

}

// choosing the action function does not matter.
// the action function will intercept the request made when submitting the form

export const loginAction = async({request}) =>{
    console.log("hello")
    const formData = await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin", true);
        console.log(localStorage.getItem("loggedin"));
        console.log(data)
        console.log(pathname)
        const response = redirect(pathname)
        response.body = true
        return response
    }catch(err){
      return err.message
    }
   // It's silly, but it works
}

const LoginPage = () =>{
    // const [loginFormData, setLoginFormData] =  React.useState({email:"", password:""})
    // const [status, setStatus ] = React.useState("idle");
    // const [errors, setError] = React.useState(null)
// const [searchParams, setSearchParams] = useSearchParams()

// code for logging status with useNavigation hook
// give us the status
const navigation  = useNavigation();
console.log(navigation);


    // const handleChange = (event) =>{
    //     const {name, value} = event.target
    //   event.preventDefault();
    //   setLoginFormData((prev) => {
    //     return{
    //         ...prev,
    //         [name] : value
    //     }
    //   });
    // }

    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     setStatus("submitting");
    //     setError(null);
    //     loginUser(loginFormData)
    //     .then((data) => console.log(data))
    //     .catch(err => setError(err) )
    //     .finally(() => setStatus("idle"))
    // }

    // search params conusming the message.
    // const   loginErrorMsg = searchParams.get("message");
    // console.log(searchParams.get("message"))

    // use of useLoaderData instead of useSearchParams

    const loginMssgError = useLoaderData();
    const errorMessage = useActionData();
    //  console.log(errors)
    return(
        <>
        <div className="login_container">
            {/* below instead of using the form we wil use Form from the react router */}
            <Form className="col" method="post" replace>
            {/* <form action="" className="col"> */}
                <div className="row">
                    <p className="errorlgnmsg">
                      {/* {loginMssgError === null ? "" : loginMssgError} */}
                      {loginMssgError &&  loginMssgError}
                       {/* {errors === null ? "" : errors.message} */}
                       {errorMessage && errorMessage}
                    </p>
                </div>
                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input type="email"  name="email" id="email" placeholder="Enter your email"
                        // value={loginFormData.email}
                        //  onChange={(event) => handleChange(event)}
                         />
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input type="password"  name="password" id="password" placeholder="Enter password"
                        //  onChange={(event) => handleChange(event)}
                        //   value={loginFormData.password}
                          />
                    </div>
                    <div className="row">
                        <input type="submit"
                        value={navigation.state === "submitting" ? "logging in" : "submit"}
                        // value="submit"
                        className="button"
                        //  onClick={() => handleSubmit(event)}
                        //  disabled={status === "submitting"}
                          disabled={navigation.state === "submitting"}
                           />
                    </div>

            {/* </form> */}
            </Form>
        </div>
        </>
    )
}

export default LoginPage;