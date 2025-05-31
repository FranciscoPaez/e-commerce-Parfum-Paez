const ItemDetail = ({detail}) => {
    return(
        <div>
            <h2>{detail.name}</h2>
            <img src={detail.img} alt={detail.name}/>
            <p>${detail.price}</p>
            <p>Stock: {detail.stock} units</p>
        </div>
    )
}

export default ItemDetail;