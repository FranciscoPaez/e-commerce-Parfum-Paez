import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { products } from "../mock/AsyncService";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../service/firebase'

const ItemListContainer = (props) => {
    const {greeting} = props
    const [data, setData] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(false);



//Firebase
useEffect(()=>{
    setLoading(true)
    const productsCollection = categoryId ? query(collection(db, 'products'), where("category", "==", categoryId)): collection(db, 'products')
    getDocs(productsCollection)
    .then((res)=>{
        const list = res.docs.map((doc)=>{
            return {
                ...doc.data(),
                id:doc.id
            }
        })
        setData(list)
    })
    .catch((err)=>console.log(err))
    .finally(()=> setLoading(false))
},[categoryId])


    return (
    <>
    {
        loading 
        ?
        <Loader/> 
        :
        <div>
            <h1 className="greeting">{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
            <ItemList data={data}/>
        </div>
    }
    </>
    )
}

export default ItemListContainer