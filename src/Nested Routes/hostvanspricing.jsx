// import {  useParams } from "react-router-dom";
// import React from 'react'
// import axios from 'axios'
import { useOutletContext } from "react-router-dom"

const HostVansPricing = () => {
    // const [vanspage, setVanspage] = React.useState([''])
    // const params = useParams();

    // React.useEffect(() => {
    // axios.get(`/api/vans/${params.id}`)
    // .then((response) => setVanspage(response.data.vans));
    // console.log(vanspage)
    // },[params.id, vanspage])
    const {vanspage} = useOutletContext();
    return (
        <>
        <div className="pricing">
            <p><span>${vanspage.price}</span><span>/day</span></p>
        </div>
        </>
     );
}

export default HostVansPricing;