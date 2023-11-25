import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import HomePage from "./homepage";
import VanLifePage from "./vanlife";
import VansDetailPage from "./vandetail";

const Navbar = () => {
    return (
        <>
        <BrowserRouter>
            <header className="header_nav">
            <div className="logo">
            <Link to="/">#VANLIFE</Link>
            </div>
            <nav>
            <Link to="/about">About</Link>
            <Link to="/vanpage">Vans</Link>
            </nav>
            </header>

             {/* <Link to="">Van</Link> */}
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path ="/vanpage" element = {<VanLifePage/>}/>
          <Route path ="/vans/:id" element = {<VansDetailPage/>}/>
          </Routes>
        </BrowserRouter>
        </>
     );
}

export default Navbar;

// What is route/ url parameter.
// a portion of our route path that is a placeholder for what will eventually the actual segment in the URL of the page.