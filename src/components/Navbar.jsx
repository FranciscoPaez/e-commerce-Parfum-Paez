import "../css/Navbar.css"
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <h2>Parfums</h2>
            <div className="a-container">
                <a href="">News</a>
                <a href="">Offers</a>
                <a href="">Best Sellers</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;