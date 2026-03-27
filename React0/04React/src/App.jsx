import {useState,useEffect} from "react"
import AllUser from "./AllUSer.jsx";
import { useSpecialChai } from "./hooks/useSpecialchai.js";
export function App(){
    const {chai,loading,error} = useSpecialChai();
    console.log("chai",chai?.data?.data[0].description)
    const [message, setMessge] = useState("Loading...")
    useEffect(()=>{
        fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10`)
            .then(res=>res.json())
            .then(data=>setMessge(data.data.data[0].dob.date))
            .catch(err=>setMessge ("Failed to Load"))
    },[]);

    // setMessge( prev => prev+1)

    return (
        <div>
            <h1>Welcom to chai code</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
            {/* <AllUser/> */}
            <h3>{chai.data?.data[0].description}</h3>
        </div>
    )
}