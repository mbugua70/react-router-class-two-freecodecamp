// import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ChallengeOne from "./lesson_two";
import ChallengeAboutPageOne from "./challengetwo";

const ChallengeParentOne = () => {
    return (
        <>
         <BrowserRouter>
         {/* we will create links which act as the anchor tags for the navigation */}
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
        <Routes>
            <Route path="/" element={<ChallengeOne/>}/>
            <Route path="/about" element={<ChallengeAboutPageOne/>}/>
        </Routes>
        </BrowserRouter>
        </>
      );
}

export default ChallengeParentOne;