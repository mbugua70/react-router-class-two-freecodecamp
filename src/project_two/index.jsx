import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPage from "./navbar";
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import "./style.css"

const MainPage = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<NavbarPage/>}>
            <Route index element={<HomePage/>}/>
             <Route path="about"  element={<AboutPage/>}/>
             <Route path="contact"  element={<ContactPage/>}/>
           </Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}

export default MainPage;