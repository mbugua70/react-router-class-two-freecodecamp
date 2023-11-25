import {
  // changing the code to non data layer api use, we will not use the BrowserRouter and Routes
  // BrowserRouter,
  // Routes,
  // Route
  RouterProvider
} from "react-router-dom";
import { router } from "./parentrouter";

// import About from "./about";
// import HomePage from "./homepage";
// import VanLifePage from "./vanlife";
// import VansDetailPage from "./vandetail";
// import Layout from "./layout";
// import Income from "./income";
// import Reviews from "./reviews";
// import HostLayout from "./HostLayout";
// import Dashboard from "./dashboard";
// import VansPageTwo from "./vansPage_two";
// // import VansPageDetails from "./vansPageDetails";
// import HostPageLayoutTwo from "./hostpageLayoutTwo";
// import HostVansDetails from "./hostvansdetails";
// import HostVansPricing from "./hostvanspricing";
// import HostVansPhoto from "./hostvansphoto";
// import PageNotFound from "./pageNotfound";

const Navbar = () => {
    return (
        <>
        {/* <BrowserRouter> */}

             {/* <Link to="">Van</Link> */}
          {/* <Routes> */}
            {/* to apply nesting we will use Route closing tag so as to access react children property. */}
        {/* <Route path="/" element={<Layout/>}> */}
          {/* <Route index element={<HomePage/>}/> */}
          {/* <Route path="about" element={<About/>}/> */}
          {/* <Route path ="vans" element = {<VanLifePage/>}/> */}
          {/* <Route path ="vans/:id" element = {<VansDetailPage/>}/> */}
          {/* below we can nest Route inside another route parent */}
          {/* <Route path="host"  element={<HostLayout/>}> */}
          {/* <Route index element={<Dashboard/>}/> */}
          {/* <Route path="income" element={<Income/>}/> */}
          {/* <Route path="vans" element={<VansPageTwo/>}/> */}
          {/* <Route path="vans/:id" element={<HostPageLayoutTwo/>}> */}
          {/* <Route index element={<HostVansDetails/>}/> */}
          {/* <Route path="pricing" element={<HostVansPricing/>}/> */}
          {/* <Route path="photos" element={<HostVansPhoto/>}/> */}
          {/* </Route> */}
          {/* <Route path = "reviews" element = {<Reviews/>}/> */}
          {/* </Route> */}
          {/* <Route path="*" element={<PageNotFound/>}/> */}
        {/* </Route> */}
          {/* </Routes> */}
        {/* </BrowserRouter> */}

        {/* below we will use RouterProvider because of non data layer api */}
        <RouterProvider router={router} />
        </>
     );
}

export default Navbar;

// What is route/ url parameter.
// a portion of our route path that is a placeholder for what will eventually the actual segment in the URL of the page.