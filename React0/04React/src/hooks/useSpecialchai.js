import { useEffect, useState } from "react";

export function useSpecialChai(){
    const [chai,setChai] = useState("");
    const [loading,setloading] = useState(true);
    const [error,setError] = useState("")
    useEffect(()=>{
        fetch("https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch special chai")
            }
            return res.json();
        })
        .then((data)=>{
            setChai(data);
            setloading(false);
        })
        .catch((error)=>{
            setError(error.message || "Something went wrong");
            setloading(false);
        })
    },[])

    return {chai,loading,error};

}