import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { addDoc } from "firebase/firestore/lite"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [buyer,setBuyer] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState ('')
    const { cart, cartTotal, clear } = useContext (CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finishPurchase = (e) => {
        e.preventDefault()

        if(!buyer.name || !buyer.address || !buyer.email){
            alert('Complete all fields')
        }else if (buyer.email !== validate){
            alert('The email do not match')
        }else{
            let order = {
            comprador:buyer,
            shopping:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const sales = collection(db, "orders")

        addDoc(sales, order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((err)=> console.log(err))
        }
    }

    console.log(buyer)
    return (
        <>
        {
            orderId
            ?
            <div>
                <h2>Order generated correctly</h2>
                <h2>id:{orderId}</h2>
                <Link to='/'>Go to Home!</Link>
            </div>
            :
            <div>
            <h1>Complete wiht your information</h1>
            <form onSubmit={finishPurchase}>
                <input type="text" placeholder="Fullname" name="name" onChange={buyerData}/>
                <input type="text" placeholder="Address" name="address" onChange={buyerData}/>
                <input type="email" placeholder="Email" name="email" onChange={buyerData}/>
                <input type="email" placeholder="Repeat your email" name="email2" onChange={(e)=> setValidate(e.target.value)}/>
                <button type="submit">Finish purchase</button>
            </form>
        </div>
        }
        </>
    )
}

export default Checkout