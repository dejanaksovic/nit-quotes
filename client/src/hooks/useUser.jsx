import { useContext } from "react"
import userContext from "../context/userContext"

export const useUser = () => {
   const context = useContext(userContext)

   if(!context)
      throw Error("User ocntext must be inside user provider")

   return context
}