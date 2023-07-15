import axios from "axios"
import { useState } from "react"
import { useQuotes } from "./useQuotes"

export const useGetQuotes = () => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const { fetchQuotes } = useQuotes()

   const getQuotes = async (query) => {
      setLoading(true)
      const params = new URLSearchParams(query)
      try {
         const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/quotes${params ? `?${params.toString()}` : ''}`, {
            headers: {
               Authorization: `Bearer ba13533b-e275-45a2-bc2e-b3098036d655`
            }
         })
         console.log(`${import.meta.env.VITE_SERVER_URL}/quotes${params ? `?${params.toString()}` : ''}`);
         console.log(res);
         fetchQuotes(res.data.quotes)
      }
      catch(err) {
         console.log(err);
         setError('Nije uspesno fetchovanje aplikacija')
      }

      setLoading(false)
   } 

   return { loading, error, getQuotes }
}