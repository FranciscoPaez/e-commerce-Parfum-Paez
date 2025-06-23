import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({detail}) => {

    const [buys,setBuys] = useState(false)
    const { addItem, itemQuantity } = useContext(CartContext);

    const onAdd = (quantity) => {
        setBuys(true)
        console.log(`You bought ${quantity} of the item ${detail.name}`)
        addItem(detail, quantity)
    }
    const uploadStock = detail.stock - itemQuantity(detail.id)
    return(
        <div>
            <h2>{detail.name}</h2>
            <img src={detail.img} alt={detail.name}/>
            <p>${detail.price}</p>
            <p>Stock: {uploadStock} units</p>
            {buys
            ? <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Link to='/'>Continue shopping</Link>
                <Link to='/cart'>Go to cart</Link>
            </div>
            :<ItemCount stock={uploadStock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail;