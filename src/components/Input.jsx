import { useState } from "react";

const Input = () => {
    const[name,setName] = useState("")
    const inputHandler = (e) => {
        setName(e.target)
    }
    return(
        <div>
            <input placeholder="Username" type="text" name="Full name" onChange={inputHandler}/>
            <p>{name}</p>
        </div>
    )
}

export default Input