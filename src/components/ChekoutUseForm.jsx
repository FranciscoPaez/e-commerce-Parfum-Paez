import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { addDoc } from "firebase/firestore/lite"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

const CheckoutUseForm = () => {

    const [orderId, setOrderId] = useState ('')
    const { cart, cartTotal, clear } = useContext (CartContext)
    const {register, handleSubmit, formState:{errs}, getValues} = useForm()


    const finishPurchase = (dataForm) => {
        let order = {
            buyer:{
                name:dataForm.name,
                address:dataForm.address,
                email:dataForm.email
            },
            buys:cart,
            total:cartTotal(),
            date:serverTimestamp()
        }

        const sales = collection(db, "orders")

        addDoc(sales, order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((err)=> console.log(err))
        }
    

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
            <form onSubmit={handleSubmit(finishPurchase)}>
                <input type="text" placeholder="Fullname" name="name" {...register("name", {required:true, minLength:3})}/>
                {errs?.name?.type === "required" && <span style={{color:'red'}}>Complete username</span>}
                {errs?.name?.type === "minLength" && <span style={{color:'red'}}>Your username is short</span>}

                <input type="text" placeholder="Address" name="address" {...register("address", {required:true, minLength:10, maxLength:40})}/>
                {errs?.address?.type === "required" && <span style={{color:'red'}}>Complete address</span>}
                {errs?.address?.type === "minLength" && <span style={{color:'red'}}>Your address must be at least 10 characters</span>}
                {errs?.address?.type === "maxLength" && <span style={{color:'red'}}>Your address is very long</span>}

                <input type="email" placeholder="Email" name="email" {...register("email", {required:true})}/>

                <input type="email" placeholder="Repeat your email" name="email2" {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
                {errs?.secondmail?.type === "equalMails" && <span style={{color:'red'}}>The emails do not match</span>}
                <button type="submit">Finish purchase</button>
            </form>
        </div>
        }
        </>
    )
}

export default CheckoutUseForm