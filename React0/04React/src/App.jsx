import {useState,useEffect} from "react"
export function App(){
    const [message, setMessge] = useState("Loading...")
    useEffect(()=>{
        fetch(`http://localhost:3000/api`)
            .then((res)=>res.json())
            .then((data)=>setMessge(data.message))
            .catch((err)=>setMessge ("Failed to Load"))
    },[])
    return (
        <div>
            <h1>Welcom to chai code</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
            
        </div>
    )
}