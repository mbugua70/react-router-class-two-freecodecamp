import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


const Layout = () => {
    return (
        <>
        <div className="mains">
        <Header/>
        {/* <h1>This is a layout page.</h1> */}
        <Outlet/>
        </div>
        <Footer/>
        </>
     );
}

export default Layout;