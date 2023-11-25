// import {Link} from "react-router-dom";
import {NavLink} from 'react-router-dom';

//  instead of using Link we will use NavLink
const Header = () => {
    return (
        <>
        <header className="header_nav">
            <div className="logo">
            <NavLink to="/">#VANLIFE</NavLink>
            </div>
            <nav>
            <NavLink
            to="/host"
            className={({isActive}) => isActive ? "my_active" : null}
            >Host</NavLink>
            <NavLink
            to="/about"
            className={({isActive}) => isActive ? "my_active" : null}

            >About</NavLink>
            <NavLink
            to="/vans"
            className={({isActive}) => isActive ? "my_active" : null}

            >Vans</NavLink>
            <NavLink
            to="/login"
            className={({isActive}) => isActive ? "my_active" : null}
            >
                Login
            </NavLink>
            </nav>
            </header>
        </>
     );
}

export default Header;