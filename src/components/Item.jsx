import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return(
        <div className="card" style={{width:'18rem'}}>
            <img src={prod.img} alt={prod.name} className="card-img"/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">${prod.price}</p>
                <Link to={'/item/'+prod.id} className="btn-card">Go somewhere</Link>
            </div>
        </div>
    )
}

export default Item