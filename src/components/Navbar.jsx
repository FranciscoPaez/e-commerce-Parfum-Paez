import { NavLink } from "react-router-dom";
import "../css/Navbar.css"
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <NavLink to='/'>
                <h2>Parfums</h2>
            </NavLink>
            <div className="a-container">
                <NavLink to='/category/news'>News</NavLink>
                <NavLink to='/category/offers'>Offers</NavLink>
                <NavLink to='/category/bestsellers'>Best Sellers</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;