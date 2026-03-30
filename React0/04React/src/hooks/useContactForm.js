import { useState } from "react";


export function useContactForm(){
    const [loading, setLoading] = useState(false);
    const [succesMessgae, setSuccessMessage] = useState(null);
    const [errorMessage, setError] = useState(null);


    const submitContact  = async (formData) => {
        console.log(formData)
        setLoading(true);
        setSuccessMessage(null);
        setError(null)
        console.log(formData)

        try {
            const res = await fetch("/api/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            const data = await res.json();
            if(!res.ok) throw new Error(data.error||"Something went wrong")
                setSuccessMessage(data.succes || "Message sent")
            } catch (err) {
            setError(err.message || "Request failed");
        } finally{
            setLoading(false);
        }

        return {
            loading,
            succesMessgae,
            errorMessage,
            submitContact
        }
    }
}