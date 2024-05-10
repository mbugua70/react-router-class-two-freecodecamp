import About from "./about";
import HomePage from "./homepage";
import VanLifePage from "./vanlife";
import VansDetailPage from "./vandetail";
import Layout from "./layout";
import Income from "./income";
import Reviews from "./reviews";
import HostLayout from "./HostLayout";
import Dashboard from "./dashboard";
import VansPageTwo from "./vansPage_two";
// import VansPageDetails from "./vansPageDetails";
import HostPageLayoutTwo from "./hostpageLayoutTwo";
import HostVansDetails from "./hostvansdetails";
import HostVansPricing from "./hostvanspricing";
import HostVansPhoto from "./hostvansphoto";
import PageNotFound from "./pageNotfound";
import { loader as vanLifeLoader } from "./vanlife";
import {loader as vanDetailLoader} from "./vandetail";
import {loader as hostLifeLoader } from "./vansPage_two";

import {loader as hostVansVansDetailsLoader} from "./vansPageDetails"
import {
    // changing the code to non data layer api use, we will not use the BrowserRouter and Routes
    // BrowserRouter,cd
    // Routes,
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
import ErrorHandling from "./error";
import LoginPage, { loginAction, loginLoader } from "./login";
// import AuthControlled from "./authoControlled";
import { requireAuth } from "./utilis";

localStorage.removeItem("logged in")

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          element={<LoginPage />}
          loader={loginLoader}
          action={loginAction}
        />
        {/* <Route element={<AuthControlled/>}> */}
        <Route
          path="vans"
          element={<VanLifePage />}
          loader={vanLifeLoader}
          errorElement={<ErrorHandling />}
        />
        <Route
          path="vans/:id"
          element={<VansDetailPage />}
          errorElement={<ErrorHandling />}
          loader={vanDetailLoader}
        />
        {/* below we can nest Route inside another route parent */}
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            errorElement={<ErrorHandling />}
            loader={async ({ request }) => {
              return await requireAuth(request);
              // return null
            }}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async ({ request }) => {
              return await requireAuth(request);
              // return null
            }}
          />

          <Route
            path="reviews"
            element={<Reviews />}
            loader={async ({ request }) => {
              return await requireAuth(request);
              // return null
            }}
          />

          <Route
            path="vans"
            element={<VansPageTwo />}
            loader={hostLifeLoader}
          />
          <Route
            path="vans/:id"
            element={<HostPageLayoutTwo />}
            loader={hostVansVansDetailsLoader}
          >
            <Route
              index
              element={<HostVansDetails />}
              loader={async ({ request }) => {
                return await requireAuth(request);
                // return null
              }}
            />
            <Route
              path="pricing"
              element={<HostVansPricing />}
              loader={async ({ request }) => {
                return await requireAuth(request);
                // return null
              }}
            />
            <Route
              path="photos"
              element={<HostVansPhoto />}
              loader={async ({ request }) => {
                return await requireAuth(request);
                // return null
              }}
            />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* </Route> */}
      </Route>
    )
  );