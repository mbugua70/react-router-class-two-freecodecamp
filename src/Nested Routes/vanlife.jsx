/* eslint-disable react-refresh/only-export-components */
// note mirage js
// import React from "react";
import { Suspense } from "react";
import "./mirage";
import {Await, Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getVans } from "./api";
import { useLoaderData, defer } from "react-router-dom";

// eport of the loader function.

export const loader = () =>{
   return defer({vansdata: getVans()});
}


const VanLifePage = () => {
const buttonSearchAppllied = {
   backgroundColor: 'orange',
   color: "#fff",
   paddingInline: "5px"
}
    const [searchParams, setSearchParams] = useSearchParams()
   //  const [vansdata, setVansData] = React.useState([""]);
   //  const [loading, setLoading] = React.useState(true);
   //  const [error, setError] = React.useState(null)
    console.log(searchParams.get("type"))
    const typeFilter = searchParams.get("type");

   //  the use of useLoaderData

   // const data = useLoaderData();
   // console.log(data);
      const vansdataPromise = useLoaderData()

   //  const displayFilter = typeFilter ? vansdata.filter(char => char.type === typeFilter) : vansdata;
   //  React.useEffect(() =>{
      // fetch("/api/vans")
      // .then((res) => res.json())
      // .then((data) => setVansData(data.vans));

   //    async function loadVanss() {
   //       setLoading(true)
   //       try{
   //          const load_data = await getVans();
   //          setVansData(load_data)
   //       }catch(err){
   //          setError(err)
   //       }finally{
   //          setLoading(false)
   //       }
   //    }
   //    loadVanss();
   //  },[])

// set search params function
 const handleSearchParams = (key, value) =>{
    setSearchParams((prevSearch) => {
      if(value === null){
         prevSearch.delete(key)
      }else{
         prevSearch.set(key, value)
      }
      return prevSearch;
    })
 }

//   if (error){
//    return <h1>There was an error: {error.message}</h1>
//   }

    return (
        <>
         {/* {loading  ? <h1> Loading ....</h1> : */}
             <div className="section">
               {/* the use of suspense component from react. */}
               <Suspense fallback={<h2>Loading vans ........</h2>}>

               <Await resolve={vansdataPromise.vansdata}>
               {
                  vansdata => {
                  const displayFilter = typeFilter ? vansdata.filter(char => char.type === typeFilter) : vansdata;
                  console.log(displayFilter)
                  return(
                     <div className="vanpage">

                     <h4> Explore our van options</h4>
                     <div className="vans_buttons">
                       {/* // using set callback function of useOutletSearchParam() */}
                       <div className="button_one">
                          {/* <button><Link to="?type=simple">Simple</Link></button> */}
                          {/* <button onClick={() => setSearchParams({type: 'simple'})}>Simple</button> */}
                         {typeFilter === "simple" ?  <button onClick={() => handleSearchParams("type", "simple")} style={buttonSearchAppllied}>Simple</button> :  <button onClick={() => handleSearchParams("type", "simple")}>Simple</button>}
                       </div>
                       <div className="button_two">
                          {/* <button><Link to="?type=rugged">Rugged</Link></button> */}
                          {typeFilter === "rugged" ? (<button onClick={() =>  handleSearchParams("type", "rugged")}style = {buttonSearchAppllied}>Rugged</button>) : (<button onClick={() =>  handleSearchParams("type", "rugged")}>Rugged</button>)}
                       </div>
                       <div className="button_three">
                          {/* <button><Link to="?type=luxury">Luxury</Link></button> */}
                         {typeFilter === "luxury" ? ( <button onClick={() => handleSearchParams("type", "luxury")}style={buttonSearchAppllied}>Luxury</button>) : ( <button onClick={() => handleSearchParams("type", "luxury")}>Luxury</button>)}
                       </div>
                       <div className="button_four">
                          {/* <button><Link to=".">Clear</Link></button> */}
                         {typeFilter ? (  <button onClick={() => handleSearchParams("type", null)}>Clear</button> ) : ""}
                       </div>
                     </div>

                     <div className="vans_data">
                        {displayFilter.map((vansitem) => {
                              console.log(vansitem)
                           return(
                                <>
                            <Link
                            key={vansitem.id}
                            to={`/vans/${vansitem.id}`}
                            state={{search: searchParams.toString(), type: typeFilter}}
                          >
                            <div className="vans" key={vansitem.id}>
                            <div className="img">
                                <img src={vansitem.imageUrl} alt="vans image" />
                            </div>
                            <div className="names_price">
                               <div className="van_name">
                                  {vansitem.name}
                               </div>
                               <div className="van_price">
                                  <span className="price">${vansitem.price}</span>
                                  <span className="periond">/day</span>
                               </div>
                            </div>
                           <div className="vans_button">
                            <button>{vansitem.type}</button>
                           </div>
                        </div>
                        </Link>
                                </>
                            )


                        })}
                     </div>

                   </div>
                  )

                  }
               }
             </Await>
             </Suspense>

           </div>
         {/* } */}

        </>
      );
}

export default VanLifePage;

// mergin search params with links
// mergin search params with the setSearchParams function

// when using function filter through search param

// const handleSearchParams = (key, value) =>{
//    const sp = new URLSearchParams(searchParams);
//    if(value === null){
//       sp.delete(key)
//    }else{
//       sp.set(key, value)
//       return `?${sp.toString()}`
//    }
// }