import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getOneProduct } from "../mock/AsyncService"

const ItemDetailContainer = () => {
    const [detail,setDetail] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
        getOneProduct(itemId)
        .then((res) => setDetail(res))
        .catch((err) => console.log(err))
    },[])

    console.log(detail)
    return(
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer;