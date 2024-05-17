/* eslint-disable react-refresh/only-export-components */
// this one we will be learning about nested routes.
// we will also learn about route params
// import React from "react";
import { Suspense } from "react";
import { Link, useLoaderData} from "react-router-dom";
import { useLocation,defer, Await } from "react-router-dom";
import { getVans } from "./api";


export async function loader ({params}){
  console.log(params);
  return defer({vansdata: getVans(params.id)});

}

const VansDetailPage = () => {
// const [vansdata, setVans] = React.useState([]);
// const params = useParams();
const locationStore = useLocation()
// console.log(locationStore)
// console.log(params)
const typeStore = locationStore.state?.type || "";
// fetch request
// React.useEffect(() => {
//    fetch(`/api/vans/${params.id}`)
//    .then((res) => res.json())
//    .then((data) => setVans(data. vans));
//    console.log(vansdata);
// },[params.id, vansdata])

const vansdataLoadingPromise = useLoaderData();
// console.log(vansdata);

    return (
      <>
        <div className="vansdetailspage">
          <Suspense fallback={<h2>Loading host vans......</h2>}>
            <Await resolve={vansdataLoadingPromise.vansdata}>
              {(vansLoadeddata) => {
                return (
                  <>
                    <Link
                      // to="/host/vans"
                      to={
                        `${locationStore.state.search}` === ""
                          ? ".."
                          : `..?${locationStore.state.search}`
                      }
                      // to={`..?${locationStore.state?.search} || ".."`}
                      relative="path"
                      className="back_button"
                    >
                      {/* &larr; <span>{locationStore.state.search !== "" ? `Back to ${vansdata.type} vans` : 'Back to all vans' }</span> */}
                      &larr; <span>Back to all {typeStore} vans</span>
                    </Link>
                    <section className="van_details">
                      <div className="van_detail">
                        <div className="van_img">
                          <img src={vansLoadeddata.imageUrl} alt="" />
                        </div>
                        <div className="van_button">
                          <button>{vansLoadeddata.type}</button>
                        </div>
                        <div className="van_name">
                          <p>{vansLoadeddata.name}</p>
                        </div>
                        <div className="van_price">
                          <p>
                            <span>${vansLoadeddata.price}</span>
                            <span>/day</span>
                          </p>
                        </div>
                        <div className="description">
                          <p>{vansLoadeddata.description}</p>
                        </div>
                        <div className="book_button">
                          <button>Book The Van</button>
                        </div>
                      </div>
                    </section>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </>
    );
}

export default VansDetailPage;

// Route Params
// the use of useParams()
// useParams allow us to grab any of the paramter we have in our url.