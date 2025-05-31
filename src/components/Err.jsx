import { Link } from "react-router-dom"

const Err = () => {
    return (
        <div>
            <h2>The route does not wxist</h2>
            <Link className="btn-err">Back to home</Link>
        </div>
    )
}

export default Err;