import { ClockLoader } from "react-spinners"

const Loader = () => {
    return(
        <div style={{width:'100%', height:'75vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <ClockLoader color="violet" size={70}/>
        </div>
    )
}

export default Loader