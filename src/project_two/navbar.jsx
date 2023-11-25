import {NavLink, Outlet} from "react-router-dom"

const NavbarPage = () => {
    return (
        <>
         <h2>Welcome John!</h2>
         <header>
            <nav>
         <NavLink
          to="/"
          className={({isActive}) => isActive ? "my_active" : null }
          >
            Home
          </NavLink>
         <NavLink
          to="about"
          className={({isActive}) => isActive ? "my_active" : null }

         >About</NavLink>
         <NavLink
          to="contact"
          className={({isActive}) => isActive ? "my_active" : null }

         >Contact</NavLink>
            </nav>
         </header>
         <Outlet/>
        </>
     );
}

export default NavbarPage;