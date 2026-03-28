import React, { useState } from 'react'
import { useContactForm } from './hooks/useContactForm'


const ContactForm = () => {
    const [form,setForm] = useState({name:"",email:"",message:""});
    const {loading, succesMessgae,errorMessage,submitContact} = useContactForm();
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name = "name"
                value = {form.name}
                onChange={handleChange}
                placeholder='your name'
                />
                <input 
                type="email"
                name = "email"
                value = {form.email}
                onChange={handleChange}
                placeholder='your email'
                />
                <textarea 
                name = "message"
                value = {form.message}
                onChange={handleChange}
                placeholder='your message'
                />
                <button type='submit' disabled={loading}>
                    {loading?"Sending...":"Send"}
                </button>
            </form>
            {succesMessgae && <p style={{color:'green'}}>{succesMessgae}</p>}
            {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
        </div>
    )
}

export default ContactForm
