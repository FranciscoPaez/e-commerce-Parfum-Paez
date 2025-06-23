import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getOneProduct } from "../mock/AsyncService"
import Loader from "./Loader"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemDetailContainer = () => {
    const [detail,setDetail] = useState({})
    const[invalid, setInvalid] =useState(false)
    const {itemId} = useParams()
    const [loading, setLoading] = useState(false);

//Firebase 
useEffect(()=>{
  setLoading(true)
  const productsCollection = collection(db, 'products')
  const docRef = doc(productsCollection, itemId)

  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      setDetail({...res.data(), id:res.id})
    }else{
      setInvalid(true)
    }
  })
  .catch((err)=>{
    console.log(err)
  })
  .finally(()=> setLoading(false))
},[])


if(invalid){
  return (
    <div>
      <h2>The product does not exist!</h2>
      <Link to='/'>Return to the home page</Link>
    </div>
  )
}
    return(
    <div>
      {
        loading 
        ?
        <Loader/> 
        :
        <div>
           <ItemDetail detail={detail}/> 
        </div>
      }
    </div>
    )
}

export default ItemDetailContainer;

