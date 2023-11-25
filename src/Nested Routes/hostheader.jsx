// import { Link } from "react-router-dom";

//  we will also use the NavLink instead of Link
import { NavLink } from "react-router-dom";

const HostHeader = () => {
  const hostActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
    return (
        <header>
            <nav className="hostnav_link">
              <NavLink
              to="/host"
              end
              style ={({isActive}) => isActive ? hostActive : null}
              >Dashboard</NavLink>
              <NavLink
              to="/host/income"
              style ={({isActive}) => isActive ? hostActive : null}

              >Income</NavLink>
              <NavLink
              to="/host/vans"
              style ={({isActive}) => isActive ? hostActive : null}

              >Vans</NavLink>
              <NavLink
              to="/host/reviews"
              style ={({isActive}) => isActive ? hostActive : null}

              >Reviews</NavLink>
            </nav>
        </header>
     );
}

export default HostHeader;