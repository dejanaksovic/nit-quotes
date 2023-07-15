import { useState } from "react"
import axios from "axios"
import { useUser } from "./useUser"
import { useQuotes } from "./useQuotes"

export const useVote = () => {
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState()

    const { user } = useUser()
    const { voteLocal } = useQuotes()

    const vote = async ( type, id, reverse ) => {
        setLoading(true)
        if(!['upvote', 'downvote'].includes(type))
            throw Error("Invlaid vote type")
        if(!reverse) {
            try {
                console.log(user.accessToken);
                const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/quotes/${id}/${type}`, {}, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    }
                })
                voteLocal(type, id, reverse)
                setError(null)
            }
            catch(err) {
                console.log(err);
                setError("Your vote failed")
            }
        }
        else {
            try {
                const res = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/quotes/${id}/${type}`, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                })
                voteLocal(type, id, reverse)
                setError(null)
            }
            catch(err) {
                setError("Your vote failed")
            }
        }
        setLoading(false)
    }

    return {error, loading, vote}

}