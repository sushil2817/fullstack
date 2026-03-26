import React from 'react'
import { useEffect, useState } from 'react'

const AllUser = () => {
    const [data, setData] = useState([])
    const [error,setError] = useState("")

    useEffect(()=>{
        fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>setError(err.message))
    },[])
    return (
        <div> 
            <h2>Avaliable User</h2>
            <ul>
                {data.map(r=>(
                    <li key={r.id}>{r}</li>
                ))}
            </ul>
        </div>
    )
}

export default AllUser
