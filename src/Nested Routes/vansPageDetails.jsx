/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from "react";
import { Link, useLoaderData,defer, Await } from "react-router-dom";
// import React from 'react'
// import axios from 'axios'
import { getHostVans } from "./api";
import { requireAuth } from "./utilis";


export async function loader ({params,request}) {
  await requireAuth(request);
  return defer({ vanspage: getHostVans(params.id) });
}


const VansPageDetails = () => {
// const [vanspage, setVanspage] = React.useState([''])
// const params = useParams();

// React.useEffect(() => {
// axios.get(`/api/vans/${params.id}`)
// .then((response) => setVanspage(response.data.vans));
// console.log(vanspage)
// },[])

const vanspageLoadingPromise = useLoaderData();

    return (
      <>
        <section className="vansPage">
          <Suspense>
            <Await resolve={vanspageLoadingPromise.vanspage}>
              {(vanspage) => {
                return (
                  <>
                    <div className="main_page">
                      <div className="container_page" key={vanspage.id}>
                        <Link
                          // to="/host/vans"
                          to=".."
                          relative="path"
                          className="back_button"
                        >
                          &larr; <span>Back to all vans</span>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </section>
      </>
    );
}

export default VansPageDetails;