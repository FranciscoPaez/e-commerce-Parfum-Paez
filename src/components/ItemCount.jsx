import { useState, useEffect} from "react";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);

    const subtract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

//    const buy = () => {
//        onAdd(count)
//    }

    return (
        <>
        {stock === 0 ? <p>Out of stock</p>
        : <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
              <button onClick={subtract}>-</button>
              <span>{count}</span>       
              <button onClick={add}>+</button>
            </div>   
            <button onClick={()=>onAdd(count)} disabled={stock === 0 || count === 0}>Add to cart</button> 
        </div>}
        </>
    )
}

export default ItemCount;