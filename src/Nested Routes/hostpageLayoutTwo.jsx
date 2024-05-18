import { Suspense } from "react";
import { useLoaderData} from "react-router-dom";
import VanPageDetailsTwo from "./vanpagedetailtwo";
import VansPageDetails  from "./vansPageDetails";
import { Outlet,Await } from "react-router-dom";


const HostPageLayoutTwo = () => {

  const vanspageLoadingPage = useLoaderData();
    return (
        <>

        <Suspense>
        <Await resolve={vanspageLoadingPage.vanspage}>
          {vanspage => {
            console.log(vanspage);
            return (
              <>
                <VansPageDetails />
                <div className="image_page">
                  <VanPageDetailsTwo vanspage={vanspage} />
                  <Outlet context={{ vanspage }} />
                </div>
              </>
            );
          }}

      </Await>
        </Suspense>


        </>
     );
}

export default HostPageLayoutTwo;

// useOutLetContext - is used to pass some of the propeties down the Outlet component
//  example is as shown below <Outlet currentVan = {{currentVan}}/>