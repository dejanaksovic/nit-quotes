import { useState } from "react"
import { useTags } from "./useTags"
import axios from "axios"

export const useGetTags = () => {
   const [ loading, setLoading ] = useState(false)
   const [ error, setError ] = useState(null)
   const { setTag } = useTags(0)

   const getTags = async () => {
      setLoading(true)

      try {
         const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/tags`, {
            headers: {
               Authorization: `Bearer ba13533b-e275-45a2-bc2e-b3098036d655`
            }
         })
            setTag(res.data)
            console.log(res.data);
      }
      catch(err) {
         console.log(err);
         setError("Greska pri konekciji")
      }

      setLoading(false)
   }

   return {error, loading, getTags}
}