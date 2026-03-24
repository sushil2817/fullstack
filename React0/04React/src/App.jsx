import {useState,useEffect} from "react"
export function App(){
    
    const [message, setMessge] = useState("Loading...")
    useEffect(()=>{
        fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10`)
            .then((res)=>res.json())
            .then((data)=>setMessge(data.totalPages))
            .catch((err)=>setMessge ("Failed to Load"))
    },[]);

    // setMessge( prev => prev+1)

    return (
        <div>
            <h1>Welcom to chai code</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
            
        </div>
    )
}