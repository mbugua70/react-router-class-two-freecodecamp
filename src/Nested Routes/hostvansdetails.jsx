/* eslint-disable react-refresh/only-export-components */
// import axios from 'axios'
import { useOutletContext} from "react-router-dom";
// import React from 'react';





const HostVansDetails = () =>{
    // const [vanspage, setVanspage] = React.useState([''])
// const params = useParams();

// React.useEffect(() => {
// axios.get(`/api/vans/${params.id}`)
// .then((response) => setVanspage(response.data.vans));
// console.log(vanspage)
// },[params.id, vanspage])

const {vanspage} = useOutletContext();

    return(
        <>

        <div className="details_page">
             <div className="name_page_two">
                <span>Name:</span><span>{vanspage.name}</span>
             </div>
            <div className="category_page">
                 <span>Category:</span><span>{vanspage.type}</span>
            </div>
            <div className="description_page">
                <span>Description:</span><span>{vanspage.description}</span>
            </div>
             <div className="visibitilty_page">
                 <span>Visibility:</span><span>public</span>
            </div>
         </div>


        </>
    )
}

export default HostVansDetails;