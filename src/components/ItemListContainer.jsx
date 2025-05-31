import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const {greeting} = props
    const [data, setData] = useState([]);
    const {categoryId} = useParams();
    console.log(categoryId)

    useEffect(()=>{
        console.log(getProducts(), 'promesa')
        getProducts()
        .then((response)=>{
            if(categoryId){
                setData(response.filter((prod)=> prod.category === categoryId))
            } else {
                setData(response)
            }
        })
        .catch((err)=>setData(err))
    },[categoryId])

    console.log(data)



    return (
        <div>
            <h1 className="greeting">{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer