import { useState } from "react"
import apiClient from "../../service/apiClient"
import { useNavigate } from "react-router"

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // for navigation
    const navigate = useNavigate()
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(loading)
    console.log(error)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            console.log(`Trying to do a signup`);
            const data = await apiClient.signup(name, email, password)
            console.log('Signup response: ', data);
            if (data.success) {
                navigate("/login")
            } else {
                setError(data.message ?? 'Signup Failed')
            }
        } catch (error) {
            console.log("Error in signup ", error)
        } finally {
            setLoading(false)
        }
        // make an api call to backed with data
        // get response from backend
        // take action based on response
    }

    return (
        <div className="signup">
            <h1>Welcome to SignUp page</h1>
            {error && <div>Error:{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Passowrd: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="loading">Loading: </label>
                    <input 
                    type="loading" 
                    name="loading"
                    id="loading"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                </div> */}
                {/* <div className="form-group">
                    <label htmlFor="error">Error: </label>
                    <input 
                    type="text" 
                    name="error"
                    id="error"
                    onChange={(e)=>setError(e.target.value)}
                    required
                    />
                </div> */}
                <button
                    type="submit"
                    disabled={loading}
                > {loading ? 'Signup...' : 'error'}
                </button>
            </form>
        </div>
    )
}
export default Signup