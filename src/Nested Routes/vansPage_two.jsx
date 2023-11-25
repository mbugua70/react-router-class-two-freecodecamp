/* eslint-disable react-refresh/only-export-components */
// import React from "react";
import { Suspense } from 'react';
import {Link, useLoaderData,Await, defer} from 'react-router-dom'
import { getHostVans } from "./api";
import { requireAuth } from './utilis';


export async function loader ({request}) {
   await requireAuth(request)
   return defer({vansdata: getHostVans()})
}

const VansPageTwo = () => {
//  const [vansdata, setVansData] = React.useState([])

//  React.useEffect(() => {
//     fetch('/api/vans/')
//     .then((res) => res.json())
//     .then((data) => setVansData(data.vans))
//     console.log(vansdata);
//  }, [vansdata])

const vansdataLoadingPromise = useLoaderData();
    return (
        <>
        <section className="vanspage_two">
          <Suspense fallback={<h2>Loading host vans.......</h2>}>
          <Await resolve={vansdataLoadingPromise.vansdata}>
            {vansdata => {
              return(
                <>
                  <div className="headings">
            <h4>Your Listed Vans</h4>
            <div className="vansholder">
            {vansdata.map((vansdataItem) => {

                    return(
                        <>
                  <Link to={`/host/vans/${vansdataItem.id}`} key={vansdataItem.id}>
                  <div className="vansholder_data" key={vansdataItem.id}>
                        <div className="image_two">
                            <img src={vansdataItem.imageUrl} alt="" />
                        </div>
                        <div className="contents">
                            <h5>{vansdataItem.name}</h5>
                            <p className="cost"><span>${vansdataItem.price}</span><span>/day</span></p>
                        </div>
                </div>
                  </Link>


                        </>
                    )

                 })}
            </div>
          </div>
                </>
              )
            }}
          </Await>
          </Suspense>
        </section>
        </>
     );
}

export default VansPageTwo;