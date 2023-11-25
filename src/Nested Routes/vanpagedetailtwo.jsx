import { Suspense } from "react";
/* eslint-disable react-refresh/only-export-components */
import { NavLink, useLoaderData, Await} from "react-router-dom";

import { requireAuth } from "./utilis";
import { getHostVans } from "./api";



export async function loader ({params,request}) {
 await requireAuth(request)
 return getHostVans(params.id)
}


const VanPageDetailsTwo = () => {
    const hostActive = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

    // const [vanspage, setVanspage] = React.useState([''])
// const params = useParams();

// React.useEffect(() => {
// axios.get(`/api/vans/${params.id}`)
// .then((response) => setVanspage(response.data.vans));
// },[params.id, vanspage])

const vanspageLoadingPage = useLoaderData();

    return (
        <>
        <Suspense fallback={<h2>Loading host van.....</h2>}>
                             <Await resolve={vanspageLoadingPage.vanspage}>
                                {vanspage => {
                                    return(
                                        <>
                                       <div className="image_two_page">
                            <div className="img_page">
                               <img src={vanspage.imageUrl} alt="" />
                            </div>
                            <div className="img_page_two">
                                <div className="button_page">
                                    <button>{vanspage.type}</button>
                                </div>
                                <div className="name_page">
                                    <p>{vanspage.name}</p>
                                    <p><span>${vanspage.price}</span><span>/day</span></p>
                                </div>
                            </div>
                            </div>
                            <div className="link_page">
                                <div className="linkss">
                                    <ul>
                                       <li>
                                        <NavLink
                                        to={`.`}
                                        style ={({isActive}) => isActive ? hostActive : null}
                                        end
                                       >Details</NavLink></li>
                                       <li><NavLink
                                       to={`pricing`}
                                       style ={({isActive}) => isActive ? hostActive : null}
                                       >Pricing</NavLink></li>
                                       <li><NavLink
                                       to={`photos`}
                                       style ={({isActive}) => isActive ? hostActive : null}
                                       >Photos</NavLink></li>
                                    </ul>
                                </div>
                                <div className="edit_page">
                                    <span>edit</span>
                                </div>
                            </div>
                                        </>
                                    )
                                }}

                            </Await>
        </Suspense>



        </>
     );
}

export default VanPageDetailsTwo;