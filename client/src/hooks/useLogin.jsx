import axios from "axios"
import { useState } from "react"
import { useUser } from "./useUser"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const { setUser } = useUser()
    const navigate = useNavigate()
 
    const login = async(username, password) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/sessions`, {
                username,
                password
            })
            setUser({...res.data})
            navigate('/quotes')            
        }
        catch(err) {
            setError("Loging in failed")
        }
    }

    return {loading, error, login}
}