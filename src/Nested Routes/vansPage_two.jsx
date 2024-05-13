/* eslint-disable react-refresh/only-export-components */
// import React from "react";
import { Suspense } from 'react';
import { Link, useLoaderData, Await, defer } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getHostVans } from "./api";
import { requireAuth } from "./utilis";

export async function loader({request}) {
  await requireAuth(request);
  return defer({ vansdata: getHostVans() });
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

  const handleRenderElement = (vansdata) => {
    const hostvans = vansdata.map((vansdataItem) => {
      return (
        <>
          <Link to={`/host/hostvans/${vansdataItem.id}`} key={uuidv4()}>
            <div className="vansholder_data" key={uuidv4()}>
              <div className="image_two" key={uuidv4()}>
                <img src={vansdataItem.imageUrl} alt="" />
              </div>
              <div className="contents" key={uuidv4()}>
                <h5>{vansdataItem.name}</h5>
                <p className="cost">
                  <span>${vansdataItem.price}</span>
                  <span>/day</span>
                </p>
              </div>
            </div>
          </Link>
        </>
      );
    });

    return (
      <div className="headings">
        {/* <section key={uuidv4()}></section> */}
        {hostvans}
      </div>
    );
  };
  return (
    <>
      <section className="vanspage_two">
        <h4>Your Listed Vans</h4>
        <Suspense fallback={<h2>Loading host vans.......</h2>}>
          <Await resolve={vansdataLoadingPromise.vansdata}>
            {handleRenderElement}
          </Await>
        </Suspense>
      </section>
    </>
  );
};

export default VansPageTwo;