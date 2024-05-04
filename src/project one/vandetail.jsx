// this one we will be learning about nested routes.
// we will also learn about route params
import React from "react";
import {useParams} from "react-router-dom";
const VansDetailPage = () => {
const [vansdata, setVans] = React.useState([]);
const params = useParams();
console.log(params)
// fetch request
React.useEffect(() => {
  fetch(`/api/vans/${params.id}`)
    .then((res) => res.json())
    .then((data) => setVans(data.vans));
  console.log(vansdata);
}, [params.id, vansdata]);

    return (
        <>
          <div className="vansdetailspage">
            <a href ="">vans details here</a>
            <section className = "van_details">
              <div className="van_detail">
              <div className="van_img">
                <img src={vansdata.imageUrl} alt="" />
               </div>
               <div className="van_button">
                <button>{vansdata.type}</button>
               </div>
               <div className="van_name">
                <p>{vansdata.name}</p>
               </div>
               <div className="van_price">
                 <p><span>${vansdata.price}</span><span>/day</span></p>
               </div>
               <div className="description">
                <p>{vansdata.description}</p>
               </div>
               <div className="book_button">
                <button>Book The Van</button>
               </div>
              </div>
            </section>

          </div>
        </>
     );
}

export default VansDetailPage;

// Route Params
// the use of useParams()
// useParams allow us to grab any of the paramter we have in our url.