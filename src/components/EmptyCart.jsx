import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div style={{padding:'2rem'}}>
            <h2>Your cart is empty!</h2>
            <h4>We invite you to see our products</h4>
            <Link to='/'>Go to buy!</Link>
        </div>
    )
}

export default EmptyCart;