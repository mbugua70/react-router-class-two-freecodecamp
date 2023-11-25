// note mirage js
import React from "react";
import "./mirage";
import {Link} from "react-router-dom";
const VanLifePage = () => {
    const [vansdata, setVansData] = React.useState([""]);

    React.useEffect(() =>{
      fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
    },[])
    return (
        <>
         <div className="section">
           <div className="vanpage">
             <h4> Explore our van options</h4>
             <div className="vans_buttons">
               <div className="button_one">
                  <button>Booked</button>
               </div>
               <div className="button_two">
                  <button>Lorem</button>
               </div>
               <div className="button_three">
                  <button>Lorem</button>
               </div>
               <div className="button_four">
                  <button>Lorem</button>
               </div>
             </div>

             <div className="vans_data">
                {vansdata.map((vansitem) => {

                   return(
                        <>
                    <Link to={`/vans/${vansitem.id}`}>
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
         </div>

        </>
      );
}

export default VanLifePage;